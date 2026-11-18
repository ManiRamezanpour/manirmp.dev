'use client';

import { useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

import cx from '@/utils/cx';

import { Pipeline } from './pipeline';
import { Readings } from './readings';
import { type ConsoleLine, SerialConsole } from './serial-console';
import {
  compensate,
  formatReading,
  MAX_SAMPLES,
  type Phase,
  phases,
  readRaw,
  type Sample,
  STEPS_PER_MOVE,
} from './simulation';

const MAX_LINES = 9;
const TICK_MS = 650;
const HOP_MS = 260;

const bootLines: Array<ConsoleLine> = [
  { id: 0, text: '=== LOAD CELL + TEMP + STEPPER TEST ===' },
  { id: 1, text: 'Scale initialized (tare done). Place weight.' },
  { id: 2, text: 'Stepper driver ENABLED (EN LOW).' },
];

export const ShapeFormerDemo = () => {
  const reduceMotion = useReducedMotion();
  const [running, setRunning] = useState(false);
  const [tempC, setTempC] = useState(25);
  const [samples, setSamples] = useState<Array<Sample>>([]);
  const [lines, setLines] = useState(bootLines);
  const [phase, setPhase] = useState<Phase | null>(null);
  const [position, setPosition] = useState(0);
  const [hop, setHop] = useState<number | null>(null);

  const tempRef = useRef(tempC);
  tempRef.current = tempC;
  const tickRef = useRef(0);
  const lineId = useRef(bootLines.length);
  const hopTimers = useRef<Array<number>>([]);

  const log = useCallback((text: string) => {
    const id = lineId.current++;
    setLines((prev) => [...prev, { id, text }].slice(-MAX_LINES));
  }, []);

  // Light up Browser -> Pi -> Arduino as a command travels
  const sendCommand = (cmd: 'START' | 'STOP') => {
    log(`> ${cmd}`);
    hopTimers.current.forEach(window.clearTimeout);
    if (reduceMotion) return;
    hopTimers.current = [0, 1, 2, null].map((value, i) =>
      window.setTimeout(() => setHop(value), i * HOP_MS),
    );
  };

  const toggle = () => {
    const next = !running;
    sendCommand(next ? 'START' : 'STOP');
    setRunning(next);
    if (!next) setPhase(null);
  };

  useEffect(() => {
    const timers = hopTimers.current;
    return () => timers.forEach(window.clearTimeout);
  }, []);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      const current = phases[tickRef.current % phases.length];
      tickRef.current += 1;
      setPhase(current);

      // Sample on every tick so the chart fills quickly,
      // but only print a reading at the measure step, like loop()
      const t = tempRef.current + (Math.random() * 2 - 1) * 0.04;
      const raw = readRaw(t);
      const sample = { raw, comp: compensate(raw, t) };
      setSamples((prev) => [...prev, sample].slice(-MAX_SAMPLES));

      if (current === 'measure') {
        log(formatReading(t, sample));
      } else if (current === 'forward') {
        setPosition(STEPS_PER_MOVE);
        log('Stepper: move FORWARD');
      } else {
        setPosition(0);
        log('Stepper: move BACKWARD');
      }
    }, TICK_MS);
    return () => window.clearInterval(timer);
  }, [running, log]);

  return (
    <div
      className={cx(
        'my-6 flex flex-col gap-4 rounded-4 p-3 tablet-sm:p-4',
        'ring-1 ring-inset ring-divider',
        'bg-[linear-gradient(160deg,rgba(var(--tint)/0.10),transparent_60%)]',
      )}
    >
      <Pipeline hop={hop} rigActive={phase !== null} position={position} />
      <div className={'grid grid-cols-1 gap-3 tablet-md:grid-cols-2'}>
        <Readings samples={samples} tempC={tempC} onTempChange={setTempC} />
        <SerialConsole lines={lines} running={running} onToggle={toggle} />
      </div>
      <p className={'m-0 text-3xs text-tertiary-txt'}>
        Simulated in your browser. The serial format, 200-step moves,
        calibration temperature and coefficient come from the firmware.
      </p>
    </div>
  );
};
