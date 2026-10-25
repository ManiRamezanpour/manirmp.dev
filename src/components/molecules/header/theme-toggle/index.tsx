'use client';

import {
  useModeAnimation,
  ThemeAnimationType,
} from 'react-theme-switch-animation';

import cx from '@/utils/cx';

import {
  ThemeIcon,
  ThemeIconContainer,
  ThemeToggleButton,
} from './theme-toggle.styles';

const sunPath =
  // eslint-disable-next-line max-len
  'M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0-5a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 17.5a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-.5a1 1 0 0 1 1-1ZM3 11h1.5a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2Zm16.5 0H21a1 1 0 1 1 0 2h-1.5a1 1 0 1 1 0-2ZM5.64 4.22l1.06 1.06a1 1 0 0 1-1.42 1.42L4.22 5.64a1 1 0 0 1 1.42-1.42Zm12.72 12.72 1.06 1.06a1 1 0 0 1-1.42 1.42l-1.06-1.06a1 1 0 0 1 1.42-1.42ZM19.78 5.64 18.72 6.7a1 1 0 0 1-1.42-1.42l1.06-1.06a1 1 0 0 1 1.42 1.42ZM6.7 18.72l-1.06 1.06a1 1 0 0 1-1.42-1.42l1.06-1.06a1 1 0 0 1 1.42 1.42Z';
const moonPath =
  // eslint-disable-next-line max-len
  'M12.3 22a10 10 0 0 1-2.94-19.56 1 1 0 0 1 1.2 1.38 7.5 7.5 0 0 0 9.62 9.62 1 1 0 0 1 1.38 1.2A10 10 0 0 1 12.3 22Z';

export default function ThemeToggle() {
  const { ref, toggleSwitchTheme } = useModeAnimation({
    animationType: ThemeAnimationType.CIRCLE,
  });

  // Icons swap through the `dark` class rather than hook state,
  // so the server render already matches the active theme.
  return (
    <ThemeToggleButton
      ref={ref}
      type={'button'}
      title={'Toggle theme'}
      onClick={toggleSwitchTheme}
    >
      <ThemeIconContainer>
        <ThemeIcon
          path={sunPath}
          className={
            'text-yellow-500 dark:-rotate-90 dark:scale-0 dark:opacity-0'
          }
        />
        <ThemeIcon
          path={moonPath}
          className={cx(
            'text-blue-200 rotate-90 scale-0 opacity-0',
            'dark:rotate-0 dark:scale-100 dark:opacity-100',
          )}
        />
      </ThemeIconContainer>
      <span className={'sr-only'}>Toggle theme</span>
    </ThemeToggleButton>
  );
}
