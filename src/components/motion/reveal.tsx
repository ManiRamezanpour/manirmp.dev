'use client';

import { motion, type Variants } from 'framer-motion';
import type { PropsWithChildren } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  shown: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease },
  },
};

const listVariants: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16, scale: 0.98 },
  shown: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 26 },
  },
};

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
}

export const Reveal = ({ children, className, delay = 0 }: RevealProps) => (
  <motion.div
    className={className}
    variants={revealVariants}
    initial={'hidden'}
    whileInView={'shown'}
    viewport={{ once: true, margin: '0px 0px -12% 0px' }}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

interface StaggerListProps extends PropsWithChildren {
  as?: 'ul' | 'ol' | 'div';
  className?: string;
}

export const StaggerList = ({
  as = 'ul',
  className,
  children,
}: StaggerListProps) => {
  const Component = motion[as];
  return (
    <Component
      className={className}
      variants={listVariants}
      initial={'hidden'}
      whileInView={'shown'}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    >
      {children}
    </Component>
  );
};

interface StaggerItemProps extends PropsWithChildren {
  as?: 'li' | 'div' | 'span';
  className?: string;
}

export const StaggerItem = ({
  as = 'li',
  className,
  children,
}: StaggerItemProps) => {
  const Component = motion[as];
  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  );
};
