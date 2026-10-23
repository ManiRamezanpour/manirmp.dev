import photo from '@/assets/images/photo.jpg';
import { Icon } from '@/components/atoms/icon';
import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { LinkButton, OutlinedLinkButton } from '@/components/atoms/link-button';
import { Section } from '@/components/atoms/section';
import { SocialLinks } from '@/components/molecules/social-links';
import { RESUME_URL } from '@/components/ui/about/experience';
import { CONTACT_EMAIL } from '@/constants';
import cx from '@/utils/cx';

export const Intro = () => {
  return (
    <Section id={'intro'} className={'gap-8'}>
      <div className={'flex flex-col gap-5'}>
        <div className={'flex flex-row items-center gap-4'}>
          <Img
            src={photo}
            alt={'Photo of Mani Ramezanpour'}
            width={88}
            height={88}
            priority
            className={cx(
              'size-18 tablet-sm:size-22 rounded-full',
              'ring-1 ring-divider ring-offset-2 ring-offset-background',
            )}
          />
          <Link
            title={'Sportmonks'}
            href={'https://www.sportmonks.com/'}
            className={cx(
              'inline-flex items-center gap-2 self-center',
              'px-3 py-1 rounded-full border border-divider',
              'text-3xs font-medium text-secondary-txt no-underline',
              'hocus:text-primary-txt hocus:bg-toolbar-highlight',
            )}
            data-umami-event={'Link to current company'}
          >
            <span className={'relative flex size-2'} aria-hidden={'true'}>
              <span
                className={cx(
                  'absolute inline-flex size-full rounded-full bg-green-400 opacity-75',
                  'motion-safe:animate-ping',
                )}
              />
              <span
                className={
                  'relative inline-flex size-2 rounded-full bg-green-500'
                }
              />
            </span>
            Software Engineer at Sportmonks
          </Link>
        </div>

        <h1
          className={cx(
            'text-[2.25rem] tablet-sm:text-[3rem] leading-tight tracking-tight',
          )}
        >
          Mani Ramezanpour
        </h1>

        <div className={'flex flex-col gap-3 max-w-nice'}>
          <p className={'text-md text-primary-txt leading-relaxed'}>
            Full-stack software engineer based in{' '}
            <Link
              title={'Netherlands'}
              href={'https://www.google.com/maps/place/Netherlands'}
              data-umami-event={'Link to Netherlands map'}
            >
              the Netherlands{' '}
              <span role={'img'} aria-label={'Netherlands flag'}>
                🇳🇱
              </span>
            </Link>
            . I build backend systems and web apps that are fast, accessible and
            easy to maintain.
          </p>
          <p>
            I care about the parts that don&apos;t show up in a demo:{' '}
            <strong>clean architecture</strong>, <strong>performance</strong>,{' '}
            <strong>accessibility</strong>, and code that&apos;s still readable
            a year later. I&apos;m happiest when I&apos;m untangling a hard
            problem.
          </p>
        </div>
      </div>

      <div
        className={cx(
          'flex flex-col gap-4',
          'tablet-sm:flex-row tablet-sm:items-center tablet-sm:justify-between',
        )}
      >
        <div className={'flex flex-row flex-wrap gap-3'}>
          <LinkButton
            title={'Resume'}
            href={RESUME_URL}
            openInNewTab
            className={'pr-3.5'}
            data-umami-event={'Resume'}
          >
            <Icon
              className={'size-5'}
              path={
                // eslint-disable-next-line max-len
                'M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10,19L12,15H9V10H15V15L13,19H10Z'
              }
            />
            <span>Resume</span>
          </LinkButton>
          <OutlinedLinkButton
            title={'Get in touch'}
            href={`mailto:${CONTACT_EMAIL}?subject=Hi%20Mani!`}
            className={'pr-3.5'}
            data-umami-event={'Get in touch'}
          >
            <Icon
              className={'size-5'}
              path={
                // eslint-disable-next-line max-len
                'm20 8-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z'
              }
            />
            <span>Get in touch</span>
          </OutlinedLinkButton>
        </div>
        <SocialLinks className={'justify-start gap-1 -ml-2'} />
      </div>
    </Section>
  );
};
