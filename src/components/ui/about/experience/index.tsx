import eightsense from '@/assets/images/experience/8thsense_logo.jpeg';
import minis from '@/assets/images/experience/minis.avif';
import aval from '@/assets/images/experience/aval.jpg';
import sampad from '@/assets/images/experience/sampad.jpeg';
import pouyabash from '@/assets/images/experience/pouyabash.jpeg';
import tourino from '@/assets/images/experience/tourio-logo.png';
import { Icon } from '@/components/atoms/icon';
import { LinkButton } from '@/components/atoms/link-button';
import { Section } from '@/components/atoms/section';
import { getColoredTextClasses } from '@/utils/colored-text';
import mehrotech from '@/assets/images/experience/mehrotech.jpeg';
import {
  ExpItem,
  type ExperienceItemProps as ExperienceRecord,
} from './exp-item';

const experience: Array<ExperienceRecord> = [
  {
    company: 'Pouyabash Co',
    position: 'Software engineer (contract based)',
    from: 'May 2025',
    until: 'Jul 2025',
    link: 'https://pouyabash.com/',
    image: pouyabash,
    color: '#4C4C59',
  },
  {
    company: 'Association Manager (Volunteer working).',
    position: 'Team Manager, Software developer',
    from: 'Nov 2024',
    link: 'https://sampad.school/',
    image: sampad,
    color: '#4C4C59',
  },
  {
    company: '8thsense, Inc.',
    position: 'Software developer',
    from: 'Jan 2024',
    until: 'Aug 2024',
    link: 'https://www.8thsense.de/',
    image: eightsense,
    color: '#2E4C94',
  },
  {
    company: 'Royan ICT (Tourino)',
    position: 'Backend developer',
    from: 'OCT 2023',
    until: 'Jan 2024',
    link: 'https://www.tourino.app/',
    image: tourino,
    color: '#8FD554',
  },
  {
    company: 'Minis Studio',
    position: 'Game developer, JS developer',
    from: 'May 2023',
    until: 'Aug 2023',
    link: 'https://www.minis.dev/',
    image: minis,
    color: '#4AA1D1',
  },
  {
    company: 'Aval co',
    position: 'Freelancer Web developer',
    from: 'OCT 2022',
    until: 'NOV 2022',
    link: 'https://www.aval-co.de/',
    image: aval,
    color: '#8FD554',
  },
  {
    company: 'Mehrotech accelerator',
    position: 'Front-end developer (Internship)',
    from: 'Aug 2022',
    until: 'Sep 2022',
    link: 'https://www.linkedin.com/company/mehrotech-accelerator/',
    image: mehrotech,
    last: true,
    color: '#8FD554',
  },
];

export const Experience = () => {
  return (
    <Section id={'experience'} className={'gap-6'}>
      <div className={'flex flex-row gap-4 items-center justify-between'}>
        <h2 className={getColoredTextClasses('brand')}>Experience</h2>
        <LinkButton
          title={'Resume'}
          href={'/resume'}
          openInNewTab
          className={'self-start pr-3.5'}
          data-umami-event={'Resume'}
        >
          <Icon
            className={'size-5'}
            path={
              // eslint-disable-next-line max-len
              'm20.7 6.8-5.5-5.5c-.2-.2-.4-.3-.7-.3H6C4.3 1 3 2.3 3 4v16c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V7.5c0-.3-.1-.5-.3-.7zm-2.6.2H15V3.9L18.1 7zM18 21H6c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h7v5c0 .6.4 1 1 1h5v11c0 .6-.4 1-1 1zm-1-8c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1zm0 4c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1zM7 9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1H8c-.6 0-1-.4-1-1z'
            }
          />
          <span>Resume</span>
        </LinkButton>
      </div>
      <ol className={'flex flex-col gap-1.5'}>
        {experience.map((exp) => {
          return (
            <li key={exp.company}>
              <ExpItem {...exp} />
            </li>
          );
        })}
      </ol>
    </Section>
  );
};
