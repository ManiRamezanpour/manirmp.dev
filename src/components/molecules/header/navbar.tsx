import type { Route } from 'next';

import { Logo } from '@/components/atoms/logo';
import {
  buildColoredLinkClasses,
  getColoredTextClasses,
} from '@/utils/colored-text';
import type { TWComponentProps } from '@/utils/cx';

import { NavToggle } from './nav-toggle';
import {
  ButtonsGroup,
  LinksList,
  Nav,
  NavItem,
  NavLink,
  NavPageLink,
  NavPageLinkText,
} from './navbar.styles';
import { ThemeToggle } from './theme-toggle';

const toolbarLinksList = [
  {
    title: 'About',
    href: '/about',
    className: buildColoredLinkClasses('blue', 'green'),
  },
];

interface NavbarProps extends TWComponentProps<typeof Nav> {
  path?: string;
  isExpanded?: boolean;
  onNavToggleClick?: () => void;
}

export const Navbar = (props: NavbarProps) => {
  const { isExpanded, className } = props;
  return (
    <Nav id={'navigation'} className={className}>
      <NavLink
        title={'Manirmp - Home Page'}
        href={'/'}
        className={'gap-2 hocus:bg-toolbar-highlight'}
        aria-current={props.path === '/' ? 'page' : undefined}
      >
        <Logo className={'saturate-125 dark:saturate-150'} />
        <span
          className={getColoredTextClasses(
            'brand',
            'brand',
            'blue',
            'saturate-125',
            true,
          )}
        >
          ManiRmp
        </span>
      </NavLink>
      <LinksList>
        {toolbarLinksList.map((link) => {
          return (
            <NavItem key={link.href}>
              <NavPageLink
                title={`${link.title} page`}
                href={link.href as Route}
                aria-current={
                  props.path?.startsWith(link.href) ? 'page' : undefined
                }
                className={link.className}
              >
                <NavPageLinkText>{link.title}</NavPageLinkText>
              </NavPageLink>
            </NavItem>
          );
        })}
      </LinksList>
      <ButtonsGroup>
        <li>
          <ThemeToggle />
        </li>
        <li>
          <NavToggle
            title={`${isExpanded ? 'Collapse' : 'Expand'} menu`}
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} menu`}
            aria-expanded={isExpanded}
            aria-controls={'header'}
            onClick={props.onNavToggleClick}
          />
        </li>
      </ButtonsGroup>
    </Nav>
  );
};
