'use client';

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import { type PointerEvent, type PropsWithChildren, useRef } from 'react';

interface MagneticProps extends PropsWithChildren {
  className?: string;
  strength?: number;
}

const spring = { stiffness: 220, damping: 16, mass: 0.4 };

// Pulls its child towards the cursor while hovered, then springs back.
export const Magnetic = ({
  children,
  className,
  strength = 0.3,
}: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useSpring(useMotionValue(0), spring);
  const y = useSpring(useMotionValue(0), spring);

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || e.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.div>
  );
};
