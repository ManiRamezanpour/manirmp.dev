import type { PropsWithChildren } from 'react';

import { Intro } from '@/components/ui/home';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  url: 'https://manirmp.dev',
  sameAs: ['https://manirmp.dev/about'],
  name: 'Manirmp',
  description: 'Passionate and creative full-stack software engineer from Iran',
  email: 'maniramznpoor2007@gmail.com',
  foundingDate: new Date('1997-01-28T18:30:00-05:00').toISOString(),
});

export default function HomeLayout(props: PropsWithChildren) {
  return (
    <>
      <Intro />
      {props.children}
      {/* <ProjectsList title={'Featured projects'} featuredOnly /> */}
      <script type={'application/ld+json'} suppressHydrationWarning>
        {jsonLd}
      </script>
    </>
  );
}
