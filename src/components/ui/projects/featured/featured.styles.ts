import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { tw } from '@/utils/cx';

export const CardLink = tw(Link)`
  group/card
  relative
  isolate
  overflow-hidden
  flex
  flex-col
  gap-4
  h-full
  w-full
  self-stretch
  p-4
  tablet-sm:p-5
  rounded-5
  no-underline
  font-normal
  text-primary-txt
  ring-1
  ring-inset
  ring-divider
  bg-[linear-gradient(150deg,rgba(var(--tint)/0.14),rgba(var(--tint)/0.03)_55%,transparent)]
  transition-[box-shadow]
  duration-300
  hocus:text-primary-txt
  hocus:ring-tint-border
  hocus:shadow-[0_18px_40px_-22px_rgba(var(--tint)/0.7)]
`;

export const CardIcon = tw(Img)`
  shrink-0
  aspect-square
  object-contain
  rounded-3
  p-1.5
  bg-tint-bg
  ring-1
  ring-inset
  ring-tint-border
  transition-transform
  duration-300
  group-hocus/card:-rotate-3
  group-hocus/card:scale-105
`;

export const VisitBadge = tw.span`
  grid
  place-items-center
  shrink-0
  size-9
  rounded-full
  ring-1
  ring-inset
  ring-divider
  text-secondary-txt
  transition-colors
  duration-300
  group-hocus/card:ring-transparent
  group-hocus/card:bg-[rgb(var(--tint))]
  group-hocus/card:text-white
`;

export const HostChip = tw.span`
  inline-flex
  items-center
  gap-1.5
  self-start
  px-2.5
  py-1
  rounded-full
  text-3xs
  font-medium
  text-tertiary-txt
  bg-tint-bg
`;
