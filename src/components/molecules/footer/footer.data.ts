import { CONTACT_EMAIL } from '@/constants';

export const linksGroups = [
  {
    title: 'Navigate',
    a11yTitle: 'Navigation links',
    links: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'About',
        href: '/about',
      },
      {
        title: 'Projects',
        href: '/projects',
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
      },
      {
        title: 'Contact',
        a11yTitle: 'Send me an email',
        href: `mailto:${CONTACT_EMAIL}`,
        props: {
          ignoreNextLink: true,
          openInNewTab: false,
        },
      },
    ],
  },
];
