import { LogoAnimoji } from '@/components/core/logo-animoji/logo-animoji';
import { SocialLinks } from '@/components/molecules/social-links/social-links';

import {
  BrandLink,
  BrandLinkSpan,
  InnerFooter,
  LinksGroup,
  LinksGroupTitle,
  StyledFooter,
} from './footer.styles';
import { FooterLinksList, type FooterLinkProps } from './links-list/links-list';

const primaryLinks: Array<FooterLinkProps> = [
  {
    title: 'About',
    href: '/about',
    className: 'from-gradient-blue to-gradient-green',
    underlineColor: 'blue',
  },
  {
    title: 'Blog',
    href: '/blog',
    className: 'from-gradient-yellow to-gradient-orange',
    underlineColor: 'yellow',
  },
  {
    title: 'Projects',
    href: '/projects',
    className: 'from-gradient-red to-gradient-purple',
    underlineColor: 'red',
  },
  {
    title: 'Donate',
    href: '/donate',
    className: 'from-gradient-purple to-gradient-brand',
    underlineColor: 'purple',
  },
  {
    title: 'Uses',
    href: '/uses',
    className: 'from-gradient-brand to-gradient-blue',
    underlineColor: 'brand',
  },
];

const metaLinks: Array<FooterLinkProps> = [
  {
    title: 'RSS',
    href: '/feed.xml',
    className: 'from-gradient-yellow to-gradient-orange',
    underlineColor: 'yellow',
    a11yTitle: 'RSS Feed',
    openInNewTab: true,
  },
  {
    title: 'Colophon',
    href: '/uses#website',
    className: 'from-gradient-purple to-gradient-brand',
    underlineColor: 'brand',
    a11yTitle: 'Website Colophon',
  },
  {
    title: 'Source',
    href: 'https://github.com/jahirfiquitiva/jahir.dev',
    className: 'from-gradient-brand to-gradient-blue',
    underlineColor: 'brand',
    a11yTitle: 'View source code on GitHub',
    openInNewTab: true,
  },
];

export const Footer = () => {
  return (
    <StyledFooter>
      <LinksGroup title={'Website pages links'}>
        <LinksGroupTitle>Index</LinksGroupTitle>
        <FooterLinksList title={'Website pages links'} links={primaryLinks} />
      </LinksGroup>
      <LinksGroup title={'Meta links'} className={'tablet-sm:items-end'}>
        <LinksGroupTitle>Meta</LinksGroupTitle>
        <FooterLinksList title={'Meta pages links'} links={metaLinks} />
      </LinksGroup>
      <InnerFooter>
        <BrandLink
          href={'/'}
          title={'Home page'}
          className={'hocus:decoration-gradient-brand group/link group/animoji'}
        >
          <LogoAnimoji />
          <BrandLinkSpan>Jahir Fiquitiva</BrandLinkSpan>
        </BrandLink>
        <SocialLinks withBackToTop />
      </InnerFooter>
    </StyledFooter>
  );
};
