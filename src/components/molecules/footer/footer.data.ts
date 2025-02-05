export const linksGroups = [
  {
    title: 'Navigate',
    a11yTitle: 'Navigation links',
    links: [
      {
        title: 'Home',
        href: '/',
        className: 'text-brand',
      },
      {
        title: 'About',
        href: '/about',
        className: 'text-green',
      },
      {
        title: 'Projects',
        href: '/projects',
        className: 'text-purple',
      },
    ],
  },
  {
    title: 'Misc',
    a11yTitle: 'Miscellaneous links',
    links: [
      {
        title: 'Donate',
        href: '/donate',
        className: 'text-yellow',
      },
      {
        title: 'Contact',
        href: '/contact',
        className: 'text-green',
        props: {
          ignoreNextLink: true,
        },
      },
      {
        title: 'Back to Top',
        a11yTitle: 'Scroll back to top',
        href: '#page',
        className: 'text-brand',
      },
    ],
  },
];
