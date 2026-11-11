/* eslint-disable max-len */
import type { ComponentProps } from 'react';

interface LogoProps extends ComponentProps<'svg'> {
  bgClassName?: string;
  fgClassName?: string;
}

export const Logo = ({ bgClassName, ...props }: LogoProps) => {
  return (
    <svg
      viewBox={'0 0 32 32'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      aria-hidden={'true'}
      className={bgClassName ?? 'size-full'}
      {...props}
    >
      <defs>
        <linearGradient
          id={'mani-logo-gradient'}
          x1={'3'}
          y1={'2'}
          x2={'29'}
          y2={'30'}
          gradientUnits={'userSpaceOnUse'}
        >
          <stop stopColor={'#fb7185'} />
          <stop offset={'1'} stopColor={'#e11d48'} />
        </linearGradient>
      </defs>
      <rect
        x={'1'}
        y={'1'}
        width={'30'}
        height={'30'}
        rx={'9'}
        fill={'url(#mani-logo-gradient)'}
      />
      <path
        d={'M8 23V9h3.1l4.9 6.2L20.9 9H24v14h-3.3v-8.8l-4.7 5.7-4.7-5.7V23H8Z'}
        fill={'white'}
      />
      <circle
        cx={'25.5'}
        cy={'6.5'}
        r={'2.5'}
        fill={'#34d399'}
        stroke={'white'}
        strokeWidth={'1.5'}
      />
    </svg>
  );
};
