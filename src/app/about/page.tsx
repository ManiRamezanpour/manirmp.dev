import personal from '@/assets/images/about/manirmp.jpg';
import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { SocialLinks } from '@/components/molecules/social-links';
import { Experience } from '@/components/ui/about/experience';
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
    name: 'ManiRmp',
    alternateName: ['Manirmp', 'Manirmpdev'],
    description: 'Passionate and creative full-stack software engineer',
    image: personal,
    sameAs: [
      'https://github.com/ManiRamezanpour',
      'https://linkedin.com/in/mani-ramezanpour',
      'https://twitter.com/mainrmp',
      'https://t.me/ManiRmp',
    ],
  },
});

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
          Hey there! I&apos;m Mani Ramezanpour, full-stack software engineer
          from{' '}
          <Link
            title={'Iran'}
            href={'https://www.google.com/maps/place/Iran/'}
            data-umami-event={'Link to Colombia map'}
          >
            Iran{' '}
            <span role={'img'} aria-label={'Iran flag'}>
              🇮🇷
            </span>
          </Link>{' '}
          with over two (2) years of experience. My pronouns are he/they.
        </p>
        <p className={'max-w-nice'}>
          I focus on details and I&apos;m passionate about crafting software
          products that look great and are both accessible and easy to maintain.
        </p>
        <Photo />
        <p className={'max-w-nice'}>
          Proficient in both front-end and back-end technologies, adeptly
          utilizing frameworks like React and Node.js to build scalable and
          intuitive solutions
        </p>
        <p className={'max-w-nice'}>
          I&apos;m all about diving into challenges improving and expanding my
          skillset and I thrive in globally-remote teams that value people and
          embrace trust, kindness, and inclusion.
        </p>
        <p className={'max-w-nice'}>
          Skilled in API integration. Strong problem-solving and use best
          practice
        </p>
        <p className={'max-w-nice'}>
          Im a competitor and quaified for 2022 and 2023 web technology
          worldskills competitio of Iran
        </p>
      </Section>
      <Section id={'contact'} className={'-mt-5 gap-2.5'}>
        <h2 className={'text-sm mb-2'}>Let&apos;s connect!</h2>
        <p>
          Feel free to reach out to me at{' '}
          <Link title={'Email'} href={'mailto:maniramznpoor2007@gmail.com'}>
            maniramznpoor2007@gmail.com
          </Link>
          , or find me on social media:
        </p>
        <SocialLinks />
      </Section>
      <Experience />
      <script type={'application/ld+json'} suppressHydrationWarning>
        {jsonLd}
      </script>
    </>
  );
}

export const metadata = createMetadata({
  title: 'About – Maniramezanpour',
  description: 'Learn more about me (Maniramezanpour), my career and more',
  exactUrl: 'https://manirmp.dev/about',
  keywords: ['bio', 'biography', 'information', 'about', 'career'],
});
