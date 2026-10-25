import { Link } from '@/components/atoms/link';
import { MAX_SITE_WIDTH } from '@/constants';
import { tw } from '@/utils/cx';

export const StyledFooter = tw.footer.attrs({
  style: { maxWidth: MAX_SITE_WIDTH },
})`
  w-full
  mx-auto
  flex
  flex-col
  gap-10
  px-3
  pt-6 pb-8
  tablet-sm:pb-10
  tablet-md:px-0
`;

export const ContactCard = tw.div`
  relative
  overflow-hidden
  flex
  flex-col
  gap-4
  p-5
  rounded-5
  ring-1
  ring-inset
  ring-divider
  bg-toolbar
  tablet-sm:flex-row
  tablet-sm:items-center
  tablet-sm:justify-between
  tablet-sm:p-6

  before:pointer-events-none
  before:absolute
  before:-top-24
  before:-right-16
  before:size-56
  before:rounded-full
  before:bg-brand-500/15
  before:blur-3xl
  dark:before:bg-brand-300/15
`;

export const LinksGrid = tw.div`
  grid
  grid-cols-2
  gap-x-6
  gap-y-8
  tablet-sm:grid-cols-4
`;

export const Details = tw.div`
  flex
  flex-col
  col-span-2
  gap-3
`;

export const Description = tw.p.attrs({ style: { maxWidth: '36ch' } })`
  text-2xs
  text-tertiary-txt
  text-pretty
`;

export const LinksList = tw.div`
  flex
  flex-col
  gap-3
`;

export const GroupTitle = tw.p`
  font-manrope
  font-bold
  text-tertiary-txt
  uppercase
  text-3xs
  select-none
  tracking-wider
`;

export const FooterLink = tw(Link)`
  text-2xs
  font-manrope
  font-semibold
  no-underline
  transition-colors
  text-secondary-txt
  hocus:text-accent
`;

export const BottomBar = tw.div`
  flex
  flex-col-reverse
  gap-3
  pt-6
  border-t
  border-divider
  text-3xs
  text-tertiary-txt
  mobile-lg:flex-row
  mobile-lg:items-center
  mobile-lg:justify-between
`;
