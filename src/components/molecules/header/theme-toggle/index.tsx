'use client';

import {
  useModeAnimation,
  ThemeAnimationType,
} from 'react-theme-switch-animation';

export default function ThemeToggle() {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
    animationType: ThemeAnimationType.CIRCLE,
  });

  return (
    <button
      ref={ref}
      onClick={toggleSwitchTheme}
      className={`relative flex items-center w-14 h-8 rounded-full transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-700' : 'bg-yellow-300'
      }`}
    >
      <span
        className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white
           shadow-md transform transition-transform duration-500 ${
             isDarkMode ? 'translate-x-6' : 'translate-x-0'
           }`}
      />

      <span className={'sr-only'}>Toggle theme</span>
    </button>
  );
}
