import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { SocialLinks } from '@/components/molecules/social-links';
import { Activity } from '@/components/views/about/activity';
import { Experience } from '@/components/views/about/experience';
import { Skills } from '@/components/views/about/skills';
import { getColoredTextClasses } from '@/utils/colored-text';
import { createMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import Photo from './photo';

export default function AboutPage() {
  return (
    <>
      <Section id={'about'}>
        <h1
          className={getColoredTextClasses(
            'blue',
            'blue',
            'green',
            'self-start',
          )}
        >
          About
        </h1>
        <p className={'max-w-nice'}>
          <span role={'img'} aria-label={'waving hand'}>
            👋
          </span>{' '}
          Hey there! I&apos;m Jahir Fiquitiva, a full-stack software engineer
          from{' '}
          <Link
            title={'Colombia on Google Maps'}
            href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
          >
            Colombia{' '}
            <span role={'img'} aria-label={'Colombia flag'}>
              🇨🇴
            </span>
          </Link>{' '}
          with over five (5) years of professional experience. My pronouns are
          he/they.
        </p>
        <p className={'max-w-nice'}>
          I focus on details and I&apos;m passionate about crafting software
          products that look great and are both accessible and easy to maintain.
        </p>
        <Photo />
        <p className={'max-w-nice'}>
          I&apos;m a huge advocate for open source and collaborating with the
          community. You can find my stash of websites, libraries, and apps on{' '}
          <Link title={'GitHub'} href={'https://github.com/jahirfiquitiva'}>
            GitHub
          </Link>{' '}
          which have earned over 2K stars.
        </p>
        <p className={'max-w-nice'}>
          I&apos;m all about diving into challenges improving and expanding my
          skillset and I thrive in globally-remote teams that value people and
          embrace trust, kindness, and inclusion.
        </p>
        <p className={'max-w-nice'}>
          If you&apos;re curious about the hardware and software tools I use
          every day, feel free to check out the{' '}
          <Link title={'Uses page'} href={'/uses'}>
            uses
          </Link>{' '}
          page.
        </p>
      </Section>
      <Section id={'contact'} className={'-mt-6 gap-2.5'}>
        <h2 className={'text-sm mb-2'}>Let&apos;s connect!</h2>
        <p>
          Feel free to reach out to me at{' '}
          <Link
            title={'Email'}
            href={'mailto:hola@jahir.dev?subject=Hi%20Jahir!'}
          >
            hola@jahir.dev
          </Link>
          , or find me on social media:
        </p>
        <SocialLinks />
      </Section>
      <Skills />
      <Experience />
      <Activity />
    </>
  );
}

export const metadata = createMetadata({
  title: 'About – Jahir Fiquitiva',
  description: 'Learn more about me (Jahir Fiquitiva), my career and more',
  exactUrl: 'https://jahir.dev/about',
  keywords: ['bio', 'biography', 'information', 'about', 'career'],
  image: buildOgImageUrl('about'),
});
