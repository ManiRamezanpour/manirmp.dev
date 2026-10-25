import cx, { tw } from '@/utils/cx';

export const StyledHeader = tw.header`
  fixed top-0 h-full
  w-screen z-3
  left-0 right-0
  bg-gradient-to-b from-light via-light/70 to-transparent
  dark:from-dark dark:via-dark/70
  p-3
  transform-gpu
  transition-[max-height]
  duration-300
  max-h-20 tablet-sm:max-h-21
`;

export const expandedClasses = cx(
  'tablet-sm:h-[unset]',
  'max-tablet-sm:max-h-full',
  'max-tablet-sm:bg-light/60',
  'max-tablet-sm:dark:bg-dark/60',
  'max-tablet-sm:backdrop-blur-sm',
);
