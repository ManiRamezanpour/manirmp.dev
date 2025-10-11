import { Skills } from '@/components/ui/about/skills';
import { Intro } from '@/components/ui/home';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  image: '../../assets/photo.jpg',
  url: 'https://jahir.dev',
  sameAs: ['https://jahir.dev/about'],
  logo: '../../assets/photo.jpg',
  name: 'Mani Ramezanpour',
  description:
    // eslint-disable-next-line max-len
    'A full-stack JS/TS Developer with 3 years of hands-on experience in creating high-performance web applications.',
  email: 'maniramznpoort',
  foundingDate: new Date('1997-01-28T18:30:00-05:00').toISOString(),
});

export default function HomePage() {
  return (
    <>
      <Intro />
      <Skills />
      <script type={'application/ld+json'} suppressHydrationWarning>
        {jsonLd}
      </script>
    </>
  );
}
