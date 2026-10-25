'use client';

import { motion } from 'framer-motion';

import { Logo } from '@/components/atoms/logo';
import type { TWComponentProps } from '@/utils/cx';
import cx from '@/utils/cx';

import { SocialLinks } from '../social-links';

import { NavToggle } from './nav-toggle';
import {
  ButtonsGroup,
  LinksList,
  Nav,
  NavIndicator,
  NavItem,
  NavLink,
  ExtraNavLinks,
  NavPageLink,
  NavPageLinkText,
  elevatedNavClasses,
  expandedNavClasses,
} from './navbar.styles';
import ThemeToggle from './theme-toggle';

const MotionNavIndicator = motion(NavIndicator);

const toolbarLinksList = [
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Donate',
    href: '/donate',
  },
];

interface NavbarProps extends TWComponentProps<typeof Nav> {
  path?: string;
  expanded?: boolean;
  elevated?: boolean;
  onNavToggleClick?: () => void;
}

export const Navbar = (props: NavbarProps) => {
  const { expanded, elevated, className } = props;
  return (
    <Nav
      id={'navigation'}
      className={cx(
        elevated ? elevatedNavClasses : '',
        expanded ? expandedNavClasses : '',
        className,
      )}
    >
      <NavLink
        title={'Mani Ramezanpour - Home Page'}
        href={'/'}
        className={'gap-2.5 pl-1.5 hocus:bg-toolbar-highlight group/logo'}
        aria-current={props.path === '/' ? 'page' : undefined}
      >
        <span
          className={cx(
            'grid place-items-center size-8 rounded-full overflow-hidden',
            'ring-1 ring-divider transition-transform duration-300',
            'group-hover/logo:-rotate-6 group-hover/logo:scale-105',
          )}
        >
          <Logo />
        </span>
        <span
          className={cx(
            'whitespace-nowrap text-md tablet-sm:text-lg font-bold tracking-tight',
            'text-primary-txt',
          )}
        >
          Mani
          <span className={'text-accent'}> Ramezanpour</span>
        </span>
      </NavLink>
      <LinksList
        className={
          expanded
            ? 'max-h-full opacity-100 select-auto pointer-events-auto visible'
            : ''
        }
      >
        {toolbarLinksList.map((link) => {
          const isActive = props.path?.startsWith(link.href) || false;
          return (
            <NavItem key={link.href}>
              <NavPageLink
                title={`${link.title} page`}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                prefetch={!isActive}
              >
                {isActive ? (
                  <MotionNavIndicator
                    layoutId={'nav-indicator'}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <NavPageLinkText>{link.title}</NavPageLinkText>
              </NavPageLink>
            </NavItem>
          );
        })}
        <ExtraNavLinks>
          <SocialLinks />
        </ExtraNavLinks>
      </LinksList>
      <ButtonsGroup>
        <li>
          <ThemeToggle />
        </li>
        <li>
          <NavToggle
            title={`${expanded ? 'Collapse' : 'Expand'} menu`}
            aria-label={`${expanded ? 'Collapse' : 'Expand'} menu`}
            aria-expanded={expanded}
            aria-controls={'header'}
            onClick={props.onNavToggleClick}
          />
        </li>
      </ButtonsGroup>
    </Nav>
  );
};
