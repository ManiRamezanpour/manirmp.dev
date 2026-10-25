import { Icon } from '@/components/atoms/icon';
import { tw } from '@/utils/cx';

export const ThemeToggleButton = tw.button`
  relative
  flex
  items-center
  justify-center
  size-11
  rounded-full
  text-secondary-txt
  transition
  duration-200
  hocus:bg-toolbar-highlight
  hocus:text-primary-txt
  active:scale-95
  group/theme
`;

export const ThemeIconContainer = tw.span`
  relative
  grid
  place-items-center
  size-5.5
  [&>*]:[grid-area:1/1]
`;

export const ThemeIcon = tw(Icon)`
  size-5.5
  transition-[transform,opacity]
  duration-500
  ease-[cubic-bezier(0.22,1,0.36,1)]
  group-hover/theme:rotate-12
`;
