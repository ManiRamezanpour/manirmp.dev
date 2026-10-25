'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

import cx from '@/utils/cx';

const PALETTES = {
  light: ['#CC404E', '#004FB0', '#ec4899'],
  dark: ['#34d399', '#93c5fd', '#f472b6'],
};

const POINTER_RADIUS = 140;
const STATIC_FRAMES = 160;

interface Particle {
  x: number;
  y: number;
  px: number;
  py: number;
  life: number;
  color: number;
}

// A field of particles drifting along a slowly evolving angle field. Every
// visit gets a new seed, and the cursor pushes particles into a swirl.
export const FlowField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 240]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.2]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const palette = PALETTES[resolvedTheme === 'dark' ? 'dark' : 'light'];
    const seed = Math.random() * 1000;
    const pointer = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let particles: Array<Particle> = [];
    let frame = 0;
    let running = false;
    let visible = true;
    let t = 0;

    const spawn = (p?: Particle): Particle => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      return Object.assign(p ?? ({} as Particle), {
        x,
        y,
        px: x,
        py: y,
        life: 80 + Math.random() * 220,
        color: Math.floor(Math.random() * palette.length),
      });
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(Math.round((width * height) / 1800), 900);
      particles = Array.from({ length: count }, () => spawn());
    };

    const angleAt = (x: number, y: number) => {
      const s = 0.0016;
      return (
        (Math.sin(x * s + seed + t * 0.6) +
          Math.cos(y * s * 1.3 - seed - t * 0.4) +
          Math.sin((x + y) * s * 0.7 + t * 0.25)) *
        Math.PI *
        0.75
      );
    };

    const step = () => {
      t += 0.004;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,0.06)';
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';
      ctx.lineWidth = 1;
      ctx.globalAlpha = resolvedTheme === 'dark' ? 0.55 : 0.4;

      for (const p of particles) {
        p.px = p.x;
        p.py = p.y;
        const angle = angleAt(p.x, p.y);
        let vx = Math.cos(angle) * 1.1;
        let vy = Math.sin(angle) * 1.1;

        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < POINTER_RADIUS && dist > 0.01) {
          const force = (1 - dist / POINTER_RADIUS) * 3;
          vx += (dx / dist) * force - (dy / dist) * force;
          vy += (dy / dist) * force + (dx / dist) * force;
        }

        p.x += vx;
        p.y += vy;
        p.life -= 1;
        if (p.life <= 0 || p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
          spawn(p);
          continue;
        }

        ctx.strokeStyle = palette[p.color];
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }
    };

    const loop = () => {
      step();
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || !visible || document.hidden) return;
      running = true;
      frame = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };

    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const onVisibility = () => (document.hidden ? stop() : start());

    resize();

    // Reduced motion: paint a still frame of the same field and stop.
    if (reduceMotion) {
      for (let i = 0; i < STATIC_FRAMES; i++) step();
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    observer.observe(canvas);

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('visibilitychange', onVisibility);
    start();

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [resolvedTheme, reduceMotion]);

  return (
    <motion.div
      aria-hidden={'true'}
      className={cx(
        'pointer-events-none absolute inset-x-0 top-0 -z-1',
        'h-[min(100svh,52rem)]',
        '[mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]',
      )}
      style={reduceMotion ? undefined : { y, opacity }}
    >
      <canvas ref={canvasRef} className={'size-full'} />
    </motion.div>
  );
};
