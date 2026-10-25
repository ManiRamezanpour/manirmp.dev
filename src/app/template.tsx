'use client';

import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

// Re-mounts on every navigation, so each page fades in. Opacity only: a
// transform here would become the containing block for the home flow field.
export default function Template(props: PropsWithChildren) {
  return (
    <motion.div
      className={'flex flex-1 flex-col gap-14'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {props.children}
    </motion.div>
  );
}
