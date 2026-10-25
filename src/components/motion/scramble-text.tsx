'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GLYPHS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&*+=<>/';

interface ScrambleTextProps {
  text: string;
  duration?: number;
}

// Decodes `text` left-to-right from random glyphs. The server render is the
// final text, so crawlers and no-JS visitors never see the scramble.
export const ScrambleText = ({ text, duration = 1100 }: ScrambleTextProps) => {
  const [output, setOutput] = useState(text);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const settled = Math.floor(progress * text.length);
      setOutput(
        text
          .split('')
          .map((char, i) =>
            i < settled || char === ' '
              ? char
              : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          )
          .join(''),
      );
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [text, duration, reduceMotion]);

  return (
    <span aria-label={text}>
      <span aria-hidden={'true'}>{output}</span>
    </span>
  );
};
