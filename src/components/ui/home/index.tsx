/* eslint-disable max-len */
import type { ReactNode } from 'react';
import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { SocialLinks } from '@/components/molecules/social-links';
import cx from '@/utils/cx';
import { Name } from './intro.styles';
import { Img } from '@/components/atoms/img';
import photo from '@/assets/images/photo.jpg';
export const Intro = () => {
  const Highlight = ({
    children,
    className = '',
  }: {
    children: ReactNode;
    className?: string;
  }) => (
    <span className={cx('px-2 py-1 rounded-md font-semibold', className)}>
      {children}
    </span>
  );

  return (
    <Section id={'intro'} className={cx('gap-8')}>
      <div
        className={cx(
          'flex flex-col gap-6 tablet-sm:block tablet-sm:space-y-5',
        )}
      >
        <Img
          src={photo}
          alt={'Photo of manirmp.tech'}
          width={170}
          height={170}
          priority
          className={cx(
            'rounded-full tablet-sm:float-right border-4 border-gradient-to-tr from-blue-400 to-purple-500',
            'max-w-36 mobile-lg:max-w-40 tablet-sm:max-w-44 tablet-md:max-w-48',
          )}
        />

        <h1
          className={cx(
            'text-[2.5rem] md:text-8xl font-[1200] leading-tight mb-6 tracking-medium',
          )}
        >
          <span className="block text-8xl dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-sm">
            Hi,{' '}
            <span className="mt-2">
              I'm{' '}
              <Name
                className={cx(
                  'text-7xl md:text-9xl font-black bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent leading-none drop-shadow',
                )}
              >
                Mani <br /> Ramezanpour
              </Name>
            </span>
          </span>
        </h1>

        <div
          className={cx(
            'text-md font-[400] flex flex-col gap-4 max-w-[40rem] leading-relaxed',
          )}
        >
          <p>
            {'I am a '}
            <Highlight
              className={cx(
                'bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent',
              )}
            >
              {'Full-Stack Software Developer'}
            </Highlight>
            {', based in '}
            <Link
              title={'Netherlands'}
              href="https://www.google.com/maps/place/Netherlands"
              data-umami-event={'Link to Netherlands map'}
            >
              {'the Netherlands '}
              <span role={'img'} aria-label={'netherlands flag'}>
                {'🇳🇱'}
              </span>
            </Link>
            {'. I specialize in creating '}
            <Highlight className={cx('bg-pink-500/20 text-pink-400')}>
              'robust, scalable, and user-centric applications'
            </Highlight>
            {', with expertise in '}
            <Highlight className={cx('bg-blue-500/20 text-blue-400')}>
              JavaScript
            </Highlight>
            {' and '}
            <Highlight className={cx('bg-blue-500/20 text-blue-400')}>
              TypeScript
            </Highlight>
            {'.'}
          </p>

          <p>
            My work emphasizes
            <Highlight
              className={cx(
                'bg-yellow-400/20 text-yellow-500 font-semibold rounded-md px-1.5 py-0.5',
              )}
            >
              performance
            </Highlight>
            {', '}
            <Highlight
              className={cx(
                'bg-teal-500/20 text-teal-400 font-semibold rounded-md px-1.5 py-0.5',
              )}
            >
              accessibility
            </Highlight>
            ,and
            <Highlight
              className={cx(
                'bg-lime-500/20 text-lime-500 font-semibold rounded-md px-1.5 py-0.5',
              )}
            >
              maintainability
            </Highlight>
            {
              '. I continuously refine my skills, adopt modern practices, and deliver elegant solutions that make an impact.'
            }
          </p>

          <p>
            {'Passionate about innovation, I thrive on building '}
            <Highlight className={cx('bg-purple-500/20 text-purple-400')}>
              {'intuitive, high-performance web applications'}
            </Highlight>
            {
              ', and exploring emerging technologies to create meaningful digital experiences.'
            }
          </p>
        </div>
      </div>

      <div
        className={cx(
          'flex flex-col gap-4 items-center mt-6',
          'mobile-lg:flex-row mobile-lg:flex-wrap',
        )}
      >
        <SocialLinks />
      </div>
    </Section>
  );
};
