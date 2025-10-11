/* eslint-disable max-len */
import type { ComponentProps } from 'react';

import { github } from '@/components/icons';
import cx from '@/utils/cx';

import { SocialLink } from './social-link';

export const SocialLinks = (props: ComponentProps<'ul'>) => {
  return (
    <ul
      className={cx(
        'flex flex-wrap justify-center items-center gap-3 sm:gap-4 mr-10s',
        props.className,
      )}
    >
      <span
        className={
          'absolute bottom-[-1.8rem] text-xs opacity-0 group-hover:opacity-100 transition-opacity'
        }
      >
        {'GitHub'}
      </span>
      <li>
        <SocialLink
          title={'GitHub'}
          href={'https://github.com/maniramezanpour'}
          iconPath={github}
          className={cx(
            'group size-10 sm:size-11 rounded-full flex items-center justify-center transition-all duration-300',
            'bg-transparent text-[#333] dark:text-[#ebebeb]',
            'hover:bg-[#ebebeb] hover:text-[#333] dark:hover:bg-[#333] dark:hover:text-[#ebebeb]',
            'hover:scale-105 hover:shadow-md',
          )}
        />
      </li>

      <li>
        <SocialLink
          title={'LinkedIn'}
          href={'https://linkedin.com/in/mani-ramezanpour'}
          iconPath={'M21 21v-7.2c0-2.4-2-4.4-4.4-4.4-1.1 0-2.5.7-3.1 1.8V9.7H9.7V21h3.8v-6.7c0-1 .8-1.9 1.9-1.9 1 0 1.9.8 1.9 1.9V21H21M5.3 7.6c1.3 0 2.3-1 2.3-2.3C7.6 4 6.5 3 5.3 3 4 3 3 4 3 5.3c0 1.2 1 2.3 2.3 2.3M7.2 21V9.7H3.4V21h3.8z'}
          className={cx(
            'group size-10 sm:size-11 rounded-full flex items-center justify-center transition-all duration-300',
            'bg-transparent text-[#0C66C2]',
            'hover:bg-[#e7f0f9] dark:hover:bg-[#031f3a]',
            'hover:scale-105 hover:shadow-md',
          )}
        />
      </li>

      <li>
        <SocialLink
          title={'𝕏 (formerly Twitter)'}
          href={'https://twitter.com/manirmps'}
          className={cx(
            'group size-10 sm:size-11 rounded-full flex items-center justify-center transition-all duration-300',
            'bg-transparent text-[#1471a9] dark:text-[#1da1f2]',
            'hover:bg-[#e8f6fe] dark:hover:bg-[#093049]',
            'hover:scale-105 hover:shadow-md',
          )}
        >
          <span className={'text-lg font-semibold leading-none select-none'}>
            {'𝕏'}
          </span>
        </SocialLink>
      </li>

      <li>
        <SocialLink
          title={'Instagram'}
          href={'https://instagram.com/manirmps'}
          iconPath={'M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7Z'}
          className={cx(
            'group size-10 sm:size-11 rounded-full flex items-center justify-center transition-all duration-300',
            'bg-transparent text-[#ae3077]',
            'hover:bg-[#f9ebf3] dark:hover:bg-[#3a1028]',
            'hover:scale-105 hover:shadow-md',
          )}
        />
      </li>

      <li>
        <SocialLink
          title={'Email'}
          href={'/contact'}
          iconPath={
            'm20 8-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z'
          }
          className={cx(
            'group size-10 sm:size-11 rounded-full flex items-center justify-center transition-all duration-300',
            'bg-transparent text-[#356AC4]',
            'hover:bg-[#ecf3fe] dark:hover:bg-[#142849]',
            'hover:scale-105 hover:shadow-md',
          )}
        />
      </li>
    </ul>
  );
};
