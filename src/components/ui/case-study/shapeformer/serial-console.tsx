'use client';

import { motion, useReducedMotion } from 'framer-motion';

import cx from '@/utils/cx';

export interface ConsoleLine {
  id: number;
  text: string;
}

interface SerialConsoleProps {
  lines: Array<ConsoleLine>;
  running: boolean;
  onToggle: () => void;
}

export const SerialConsole = ({
  lines,
  running,
  onToggle,
}: SerialConsoleProps) => {
  const reduceMotion = useReducedMotion();
  return (
    <div
      className={cx(
        'flex flex-col rounded-3 overflow-hidden',
        'bg-[#0b0f0e] text-[#d1fae5] ring-1 ring-inset ring-divider',
      )}
    >
      <div
        className={
          'flex items-center justify-between px-3 py-2 border-b border-white/10'
        }
      >
        <span className={'text-3xs font-mono text-white/60'}>
          Serial monitor · 115200 baud
        </span>
        <span className={'flex items-center gap-1.5 text-3xs text-white/60'}>
          <span
            className={cx(
              'size-1.5 rounded-full',
              running ? 'bg-[#34d399] animate-pulse' : 'bg-white/30',
            )}
          />
          {running ? 'running' : 'idle'}
        </span>
      </div>
      <div
        role={'log'}
        className={cx(
          'flex-1 min-h-44 flex flex-col justify-end gap-0.5 p-3',
          'font-mono text-[10px] leading-relaxed',
        )}
        aria-label={'Serial output'}
      >
        {lines.map((line) => (
          <motion.div
            key={line.id}
            initial={reduceMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className={cx(
              'break-words',
              line.text.startsWith('>') && 'text-[#fde68a]',
            )}
          >
            {line.text}
          </motion.div>
        ))}
      </div>
      <div className={'p-3 pt-0'}>
        <button
          type={'button'}
          onClick={onToggle}
          aria-pressed={running}
          className={cx(
            'w-full rounded-2 px-3 py-2 text-2xs font-semibold transition',
            running
              ? 'bg-white/10 text-white hocus:bg-white/20'
              : 'bg-[rgb(var(--tint))] text-white hocus:brightness-110',
          )}
          data-umami-event={'ShapeFormer demo toggle'}
        >
          {running ? 'Stop cycle' : 'Start cycle'}
        </button>
      </div>
    </div>
  );
};
