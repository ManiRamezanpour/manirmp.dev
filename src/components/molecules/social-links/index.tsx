/* eslint-disable max-len */
import type { ComponentProps } from 'react';

import { github } from '@/components/icons';
import cx from '@/utils/cx';

import { SocialLink } from './social-link';

export const SocialLinks = (props: ComponentProps<'ul'>) => {
  return (
    <ul className={cx('flex flex-row items-center gap-1.5', props.className)}>
      <li>
        <SocialLink
          title={'GitHub'}
          href={'https://github.com/ManiRamezanpour'}
          iconPath={github}
          className={
            'hocus:text-[#333] hocus:dark:text-[#ebebeb] hocus:bg-[#ebebeb] dark:hocus:bg-[#333]'
          }
        />
      </li>
      <li>
        <SocialLink
          title={'LinkedIn'}
          href={'https://linkedin.com/in/mani-ramezanpour'}
          iconPath={
            'M21 21v-7.2c0-2.4-2-4.4-4.4-4.4-1.1 0-2.5.7-3.1 1.8V9.7H9.7V21h3.8v-6.7c0-1 .8-1.9 1.9-1.9 1 0 1.9.8 1.9 1.9V21H21M5.3 7.6c1.3 0 2.3-1 2.3-2.3C7.6 4 6.5 3 5.3 3 4 3 3 4 3 5.3c0 1.2 1 2.3 2.3 2.3M7.2 21V9.7H3.4V21h3.8z'
          }
          className={
            'hocus:text-[#0C66C2] hocus:dark:text-[#5494d4] hocus:bg-[#e7f0f9] dark:hocus:bg-[#031f3a]'
          }
        />
      </li>
      <li>
        <SocialLink
          title={'𝕏 (formerly Twitter)'}
          aria-label={'𝕏 (formerly Twitter)'}
          href={'https://twitter.com/jahirfiquitiva'}
          className={cx(
            'leading-none',
            'hocus:text-[#1471a9] hocus:dark:text-[#1da1f2] hocus:bg-[#e8f6fe] dark:hocus:bg-[#093049]',
          )}
        >
          <span
            className={cx(
              'font-manrope font-semibold',
              'size-[22px] select-none',
              'flex items-center justify-center',
              'leading-none text-xl text-center',
            )}
          >
            𝕏
          </span>
        </SocialLink>
      </li>
      <li>
        <SocialLink
          title={'Email'}
          href={'mailto:maniramznpoor2007@gmail.com'}
          iconPath={
            'm20 8-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z'
          }
          className={
            'hocus:text-[#356AC4] hocus:dark:text-[#5591f5] hocus:bg-[#ecf3fe] dark:hocus:bg-[#142849]'
          }
        />
      </li>
    </ul>
  );
};
