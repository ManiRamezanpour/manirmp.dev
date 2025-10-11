import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { SocialLinks } from '@/components/molecules/social-links';
import { Experience } from '@/components/ui/about/experience';
import { Skills } from '@/components/ui/about/skills';
import { getColoredTextClasses } from '@/utils/colored-text';
import { createMetadata } from '@/utils/metadata';

import Photo from './photo';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateCreated: new Date('1997-01-28T18:30:00-05:00').toISOString(),
  dateModified: new Date().toISOString(),
  mainEntity: {
    '@id': '#main-author',
    '@type': 'Person',
    name: 'Mani Ramezanpour',
    alternateName: ['maniramezanpour', 'manidotdev'],
    description:
      'Passionate and creative full-stack software engineer based in Netherland',
    sameAs: [
      'https://github.com/Maniramezanpour',
      'https://linkedin.com/in/mani-ramezanpour',
      'https://twitter.com/manirmps',
      'https://instagram.com/jahirfiquitiva',
    ],
  },
});

export default function AboutPage() {
  return (
    <>
      <Section id={'about'}>
        <h1 className={getColoredTextClasses('green')}>About</h1>
        <p className={'max-w-nice'}>
          <span role={'img'} aria-label={'waving hand'}>
            👋 Hey there!
          </span>{' '}
          I&apos;m Mani Ramezanpour, a results-oriented Full-Stack Software
          Developer based in{' '}
          <Link
            title={'Iran'}
            href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
            data-umami-event={'Link to Colombia map'}
          >
            Netherland{' '}
            <span role={'img'} aria-label={'iran flag'}>
              🇳🇱
            </span>
          </Link>{' '}
          With three years of professional experience, my focus is on designing
          and building web applications that achieve high standards for
          performance, accessibility, and visual quality. (My pronouns are
          he/they.)
        </p>
        <p className={'max-w-nice'}>
          I focus on details and I&apos;m passionate about crafting software
          products that look great and are both accessible and easy to maintain.
        </p>
        <Photo />
        <p className={'max-w-nice'}>
          My dedication to detail and technical excellence was rigorously tested
          through my participation in the WorldSkills Competition in Web
          Technology. I specialize in engineering full-stack software products
          that are not only visually stunning and highly accessible but are also
          built with clean, standards-compliant code for easy maintenance and
          long-term stability.
          <Link title={'GitHub'} href={'worldskills.org'}>
            Worldskills
          </Link>{' '}
        </p>
        <p className={'max-w-nice'}>
          I&apos;m all about diving into challenges improving and expanding my
          skillset and I thrive in globally-remote teams that value people and
          embrace trust, kindness, and inclusion.
        </p>
      </Section>
      <Section id={'contact'} className={'-mt-5 gap-2.5'}>
        <h2 className={'mb-1'} style={{ fontSize: '1rem' }}>
          Let&apos;s connect!
        </h2>
        <p>
          Feel free to reach out to me at{' '}
          <Link
            title={'Email'}
            href={'mailto:maniramznpoor2007@gmail.com?subject=Hi%20Mani!'}
          >
            maniramznpoor2007@gmail.com
          </Link>
          , or find me on social media:
        </p>
        <SocialLinks />
      </Section>
      <Skills />
      <Experience />
      {/* <Activity /> */}
      <script type={'application/ld+json'} suppressHydrationWarning>
        {jsonLd}
      </script>
    </>
  );
}

export const metadata = createMetadata({
  title: 'About – Mani Ramezanpour',
  description: 'Learn more about me (Mani Ramezanpour), my career and more',
  exactUrl: 'https://jahir.dev/about',
  keywords: ['bio', 'biography', 'information', 'about', 'career'],
});
