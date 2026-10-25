/* eslint-disable max-len */
import { Link } from '@/components/atoms/link';
import { MAX_SITE_WIDTH } from '@/constants';
import { tw } from '@/utils/cx';

export const Nav = tw.nav.attrs({ style: { maxWidth: MAX_SITE_WIDTH } })`
  relative
  mx-auto
  h-full
  w-full
  z-4
  p-1.5
  bg-light/70
  dark:bg-dark/70
  backdrop-saturate-150
  backdrop-blur-md
  transform-gpu
  ring-1
  ring-inset
  ring-divider
  rounded-full
  grid
  grid-cols-[auto_1fr]
  grid-rows-[auto_1fr]
  transition-[box-shadow,background-color,border-radius]
  duration-300
  shadow-none
  shadow-brand-950/10
  dark:shadow-black/40
  tablet-sm:items-center
  tablet-sm:grid-cols-[auto_1fr_auto]
  tablet-sm:grid-rows-1
  tablet-sm:gap-2

  before:pointer-events-none
  before:select-none
  before:absolute
  before:inset-0
  before:rounded-[inherit]
  before:bg-[linear-gradient(to_bottom,_var(--color-toolbar-highlight),_transparent_70%)]
  before:opacity-60
`;

export const elevatedNavClasses = `
  bg-light/90
  dark:bg-dark/90
  shadow-[0_8px_24px_-12px_var(--tw-shadow-color)]
`;

export const expandedNavClasses = `
  max-tablet-sm:rounded-5
  max-tablet-sm:bg-light
  max-tablet-sm:dark:bg-dark
`;

export const LinksList = tw.ol`
  h-full
  max-h-0
  opacity-0
  select-none
  pointer-events-none
  invisible
  flex flex-col
  justify-start
  gap-0
  px-1
  pt-4
  transition
  duration-200
  delay-150
  will-change-[max-height,opacity,visibility]
  tablet-sm:max-h-full
  tablet-sm:p-0
  tablet-sm:gap-1
  tablet-sm:opacity-100
  tablet-sm:select-auto
  tablet-sm:pointer-events-auto
  tablet-sm:visible
  tablet-sm:flex-row
  tablet-sm:justify-end
  max-tablet-sm:col-span-2
`;

export const NavLink = tw(Link)`
  relative
  no-underline
  font-manrope font-semibold
  min-h-11 min-w-11 h-full
  max-h-11
  px-3.5 py-1.5 rounded-full
  flex items-center
  transition-colors duration-200
`;

export const NavItem = tw.li`
  relative
  max-tablet-sm:border-b
  max-tablet-sm:border-divider
  max-tablet-sm:last-of-type:border-none
`;

export const NavIndicator = tw.span`
  absolute
  inset-0
  rounded-full
  bg-toolbar-highlight
  ring-1
  ring-inset
  ring-divider
`;

export const NavPageLink = tw(NavLink)`
  text-secondary-txt
  hocus:text-primary-txt
  aria-[current=page]:text-accent
  max-tablet-sm:text-md
  max-tablet-sm:min-h-14
  max-tablet-sm:max-h-14
  max-tablet-sm:px-4
`;

export const NavPageLinkText = tw.span`
  relative
  z-1
`;

export const ButtonsGroup = tw.ul`
  flex flex-row
  items-center
  justify-end
  gap-1
  [grid-row:1]
  [grid-column:2]
  tablet-sm:gap-0
  tablet-sm:justify-start
  tablet-sm:[grid-column:3/4]
`;

export const ExtraNavLinks = tw.li`
  min-h-11
  mt-auto
  pt-6
  pb-4
  tablet-sm:hidden
  tablet-sm:invisible
  tablet-sm:select-none
  tablet-sm:pointer-events-none
`;
