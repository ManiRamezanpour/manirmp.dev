'use client';

import { MotionConfig } from 'framer-motion';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { type PropsWithChildren } from 'react';

import { ThemeProvider } from './theme-provider';

export function Providers(props: PropsWithChildren) {
  return (
    <NextThemeProvider
      attribute={'class'}
      defaultTheme={'system'}
      enableColorScheme
      disableTransitionOnChange
    >
      <ThemeProvider>
        <MotionConfig reducedMotion={'user'}>{props.children}</MotionConfig>
      </ThemeProvider>
    </NextThemeProvider>
  );
}
