import { Intro } from '@/components/ui/home';
import { ProjectsList } from '@/components/ui/projects';

import { FeaturedBlogPosts } from './featured-posts';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  image: 'https://jahir.dev/media/jahir/jahir-hd.jpg',
  url: 'https://jahir.dev',
  sameAs: ['https://jahir.dev/about'],
  logo: 'https://jahir.dev/media/brand/logo-full.png',
  name: 'Jahir Fiquitiva',
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
      <FeaturedBlogPosts />
      <ProjectsList title={'Featured projects'} featuredOnly />
      <script type={'application/ld+json'} suppressHydrationWarning>
        {jsonLd}
      </script>
    </>
  );
}
