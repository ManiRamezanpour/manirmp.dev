/* eslint-disable max-len */
import type { ComponentProps } from 'react';

import imagebrand from '@/assets/images/icon.png';

import { Img } from './img';

interface LogoProps extends ComponentProps<'svg'> {
  bgClassName?: string;
  fgClassName?: string;
}

export const Logo = ({ bgClassName }: LogoProps) => {
  return (
    <Img
      src={imagebrand}
      alt={'mani logo'}
      width={32}
      height={32}
      className={bgClassName}
    />
  );
};
