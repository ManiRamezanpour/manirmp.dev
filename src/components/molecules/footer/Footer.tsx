import { Logo } from '@/components/atoms';
import type { FC } from '@/types';
import { styled, theme } from '~/stitches';

import { FooterLink, FooterLinksGroup } from './FooterLinksGroup';
import type { FooterLinkProps } from './FooterLinksGroup';
import { SocialLinks } from './SocialLinks';

const StyledFooter = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  py: '2.4rem',
  px: '0.8rem',
  gap: '2.4rem',
  borderTop: '1px solid $divider',
  '@tablet-lg': {
    px: 0,
  },
});

const InnerFooter = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  '@tablet-sm': {
    justifyContent: 'space-between',
  },
});

const BrandLink = styled(FooterLink, {
  display: 'inline-flex',
  alignSelf: 'flex-start',
  gap: '0.4rem',
  minHeight: '30px',
  minWidth: '130px',
  '@mobile-md': {
    minWidth: '154px',
  },
  '& > svg': {
    width: '24px',
    height: '24px',
  },
});

const LinksContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  '@tablet-sm': {
    justifyContent: 'space-between',
  },
});

const primaryLinks: Array<FooterLinkProps> = [
  {
    title: 'About',
    href: '/about',
    gradient: 'blue-to-green',
  },
  {
    title: 'Blog',
    href: '/blog',
    gradient: 'yellow-to-orange',
  },
  {
    title: 'Projects',
    href: '/projects',
    gradient: 'red-to-purple',
  },
  {
    title: 'Contact',
    href: '/contact',
    gradient: 'brand-to-blue',
  },
];

const secondaryLinks: Array<FooterLinkProps> = [
  {
    title: 'Uses',
    href: '/uses',
    gradient: 'yellow-to-orange',
  },
  {
    title: 'Donate',
    href: '/donate',
    gradient: 'orange-to-red',
  },
  {
    title: 'Inspiration',
    href: '/inspiration',
    gradient: 'brand-to-blue',
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    gradient: 'purple-to-brand',
  },
];

const metaLinks: Array<FooterLinkProps> = [
  {
    title: 'RSS',
    href: '/feed.xml',
    gradient: 'yellow-to-orange',
  },
  {
    title: 'Source',
    href: 'https://github.com/jahirfiquitiva/jahir.dev',
    gradient: 'brand-to-blue',
  },
  {
    title: 'Ideas',
    href: 'https://github.com/jahirfiquitiva/jahir.dev/discussions/new?category=ideas',
    gradient: 'orange-to-red',
  },
];

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <LinksContainer>
        <FooterLinksGroup title={'Primary pages links'} links={primaryLinks} />
        <FooterLinksGroup
          title={'Secondary pages links'}
          links={secondaryLinks}
        />
        <FooterLinksGroup meta title={'Meta pages links'} links={metaLinks} />
      </LinksContainer>
      <InnerFooter>
        <BrandLink
          href={'/'}
          title={'Home page'}
          gradient={'brand-to-blue'}
          forceGradient
        >
          <Logo fillColor={theme.colors['gradient-brand']?.value} />
          <span>Jahir Fiquitiva</span>
        </BrandLink>
        <SocialLinks />
      </InnerFooter>
    </StyledFooter>
  );
};