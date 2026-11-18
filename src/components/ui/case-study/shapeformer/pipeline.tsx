'use client';

import { motion, useReducedMotion } from 'framer-motion';

import cx from '@/utils/cx';

import { STEPS_PER_MOVE } from './simulation';

const nodes = [
  { id: 'browser', title: 'Browser', detail: 'Start / Stop' },
  { id: 'pi', title: 'Raspberry Pi', detail: 'Flask API' },
  { id: 'arduino', title: 'Arduino', detail: 'Firmware loop' },
  { id: 'rig', title: 'Rig', detail: 'Sensors + stepper' },
] as const;

const edges = ['HTTP', 'Serial', 'GPIO'];

const gearPath =
  'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8.94 3a9 9 0 0 0-.6-2.2l1.7-1.3-2-3.4-2 .8' +
  'a9 9 0 0 0-1.9-1.1L15.8 1h-4l-.3 2.3a9 9 0 0 0-1.9 1.1l-2-.8-2 3.4 1.7 1.3' +
  'a9 9 0 0 0 0 4.4l-1.7 1.3 2 3.4 2-.8a9 9 0 0 0 1.9 1.1l.3 2.3h4l.3-2.3' +
  'a9 9 0 0 0 1.9-1.1l2 .8 2-3.4-1.7-1.3c.3-.7.5-1.4.6-2.2Z';

interface PipelineProps {
  /** Index of the hop a command is currently on, or null */
  hop: number | null;
  /** Whether the rig is busy running a cycle */
  rigActive: boolean;
  /** Stepper position, 0..STEPS_PER_MOVE */
  position: number;
}

export const Pipeline = ({ hop, rigActive, position }: PipelineProps) => {
  const reduceMotion = useReducedMotion();
  const lastNode = nodes.length - 1;
  return (
    <div
      role={'list'}
      className={cx(
        'grid grid-cols-1 gap-2',
        'tablet-md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] tablet-md:items-center',
      )}
      aria-label={'System architecture'}
    >
      {nodes.map((node, i) => {
        const hot =
          hop === i ||
          (hop === edges.length - 1 && i === lastNode) ||
          (rigActive && i === lastNode);
        return (
          <div key={node.id} role={'listitem'} className={'contents'}>
            <div
              className={cx(
                'relative flex flex-col gap-0.5 rounded-3 px-3 py-2.5 ring-1 ring-inset',
                i === lastNode && 'pr-8',
                'transition-[box-shadow,background-color] duration-300',
                hot
                  ? 'bg-tint-bg ring-tint-border shadow-[0_0_24px_-6px_rgba(var(--tint)/0.6)]'
                  : 'bg-background ring-divider',
              )}
            >
              <span className={'text-3xs font-semibold text-primary-txt'}>
                {node.title}
              </span>
              <span className={'text-3xs text-tertiary-txt'}>
                {node.detail}
              </span>
              {i === lastNode ? (
                <motion.svg
                  viewBox={'0 0 24 24'}
                  aria-hidden={'true'}
                  className={
                    'absolute right-2.5 top-2.5 size-5 text-[rgb(var(--tint))]'
                  }
                  animate={{ rotate: (position / STEPS_PER_MOVE) * 360 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 0.5, ease: 'easeInOut' }
                  }
                >
                  <path fill={'currentColor'} d={gearPath} />
                </motion.svg>
              ) : null}
            </div>
            {i < edges.length ? (
              <div
                className={cx(
                  'flex items-center justify-center gap-2 py-1',
                  'tablet-md:flex-col tablet-md:gap-1 tablet-md:py-0 tablet-md:px-1',
                )}
                aria-hidden={'true'}
              >
                <span
                  className={cx(
                    'h-5 w-px tablet-md:h-px tablet-md:w-8',
                    'transition-colors duration-200',
                    hop === i ? 'bg-[rgb(var(--tint))]' : 'bg-divider',
                  )}
                />
                <span
                  className={
                    'text-3xs font-mono text-tertiary-txt whitespace-nowrap'
                  }
                >
                  {edges[i]}
                </span>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
