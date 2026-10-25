'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import type { CSSProperties, PointerEvent, PropsWithChildren } from 'react';

import cx from '@/utils/cx';

const spring = { stiffness: 300, damping: 30 };

interface TiltCardProps extends PropsWithChildren {
  tint: string;
  className?: string;
  glowClassName?: string;
}

// 3D tilt plus a cursor-following spotlight in the card's tint colour.
export const TiltCard = ({
  children,
  tint,
  className,
  glowClassName = 'inset-y-0 -inset-x-3 tablet-md:rounded-2.5',
}: TiltCardProps) => {
  const reduceMotion = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const glow = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [0, 1], [5, -5]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-5, 5]), spring);
  const opacity = useSpring(glow, spring);
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  // eslint-disable-next-line max-len
  const background = useMotionTemplate`radial-gradient(260px circle at ${gx} ${gy}, rgba(var(--tint) / 0.18), transparent 70%)`;

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
    glow.set(1);
  };

  const onPointerLeave = () => {
    px.set(0.5);
    py.set(0.5);
    glow.set(0);
  };

  return (
    <motion.div
      className={cx('relative [perspective:800px]', className)}
      style={{ '--tint': tint } as CSSProperties}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <motion.div
        className={'relative h-full [transform-style:preserve-3d]'}
        style={reduceMotion ? undefined : { rotateX, rotateY }}
      >
        <motion.div
          aria-hidden={'true'}
          className={cx('pointer-events-none absolute', glowClassName)}
          style={{ background, opacity }}
        />
        {children}
      </motion.div>
    </motion.div>
  );
};
