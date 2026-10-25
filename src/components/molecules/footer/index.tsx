import { Icon } from '@/components/atoms/icon';
import { LinkButton } from '@/components/atoms/link-button';
import { Logo } from '@/components/atoms/logo';
import { Magnetic } from '@/components/motion/magnetic';
import { CONTACT_EMAIL } from '@/constants';
import cx from '@/utils/cx';

import { SocialLinks } from '../social-links';

import { linksGroups } from './footer.data';
import {
  BottomBar,
  ContactCard,
  Description,
  Details,
  FooterLink,
  GroupTitle,
  LinksGrid,
  LinksList,
  StyledFooter,
} from './footer.styles';

const arrowUpPath =
  'M13 20h-2V8l-5.5 5.5-1.42-1.42L12 4.16l7.92 7.92-1.42 1.42L13 8z';
const mailPath =
  // eslint-disable-next-line max-len
  'm20 8-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z';

export const Footer = () => {
  return (
    <StyledFooter>
      <ContactCard>
        <div className={'relative flex flex-col gap-1'}>
          <p className={'text-lg font-bold text-primary-txt tracking-tight'}>
            Have an idea worth building?
          </p>
          <p className={'text-2xs text-tertiary-txt'}>
            I&apos;m always happy to talk about new projects and roles.
          </p>
        </div>
        <Magnetic className={'relative self-start tablet-sm:self-center'}>
          <LinkButton
            title={'Send me an email'}
            href={`mailto:${CONTACT_EMAIL}`}
            ignoreNextLink
            openInNewTab={false}
            className={'pr-3.5'}
            data-umami-event={'Footer contact'}
          >
            <Icon className={'size-5'} path={mailPath} />
            <span>Get in touch</span>
          </LinkButton>
        </Magnetic>
      </ContactCard>

      <LinksGrid>
        <Details>
          <FooterLink
            title={'Mani Ramezanpour - Home Page'}
            href={'/'}
            className={'flex flex-row items-center gap-2.5 text-xs font-bold'}
          >
            <span
              className={
                'grid place-items-center size-7 rounded-full overflow-hidden ring-1 ring-divider'
              }
            >
              <Logo />
            </span>
            <span className={'text-primary-txt'}>
              Mani <span className={'text-accent'}>Ramezanpour</span>
            </span>
          </FooterLink>
          <Description>
            Full-stack software engineer building fast, accessible and
            maintainable web apps from{' '}
            <span className={'text-secondary-txt font-medium'}>
              the Netherlands{' '}
              <span role={'img'} aria-label={'Netherlands flag'}>
                🇳🇱
              </span>
            </span>
          </Description>
          <SocialLinks className={'justify-start gap-1 -ml-2.5'} />
        </Details>
        {linksGroups.map((group) => {
          return (
            <LinksList key={group.title}>
              <GroupTitle>{group.title}</GroupTitle>
              <ul
                title={group.a11yTitle}
                aria-label={group.a11yTitle}
                className={'flex flex-col gap-2.5'}
              >
                {group.links.map((link) => {
                  return (
                    <li key={link.title}>
                      <FooterLink
                        title={link.a11yTitle || link.title}
                        href={link.href}
                        {...link.props}
                        prefetch={false}
                      >
                        {link.title}
                      </FooterLink>
                    </li>
                  );
                })}
              </ul>
            </LinksList>
          );
        })}
      </LinksGrid>

      <BottomBar>
        <p>
          © {new Date().getFullYear()} Mani Ramezanpour. All rights reserved.
        </p>
        <FooterLink
          title={'Scroll back to top'}
          href={'#page'}
          className={
            'group/top inline-flex items-center gap-1.5 text-3xs text-tertiary-txt'
          }
        >
          Back to top
          <span
            className={cx(
              'grid place-items-center size-6 rounded-full ring-1 ring-divider',
              'transition-transform group-hover/top:-translate-y-0.5',
            )}
          >
            <Icon className={'size-3.5'} path={arrowUpPath} />
          </span>
        </FooterLink>
      </BottomBar>
    </StyledFooter>
  );
};
