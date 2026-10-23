import type { CSSProperties } from 'react';

import { Icon } from '@/components/atoms/icon';
import { Section } from '@/components/atoms/section';
import { hexToRgb } from '@/utils/color';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';

import { skillCategories, skills } from './data';

const visibleSkills = skills.filter((s) => !s.hide);

export const Skills = () => {
  return (
    <Section id={'skills'} className={'gap-6'}>
      <h2 className={getColoredTextClasses('blue')}>Tech stack</h2>
      <dl className={'flex flex-col gap-4'}>
        {skillCategories.map((category) => {
          const items = visibleSkills.filter((s) => s.category === category);
          if (!items.length) return null;
          return (
            <div
              key={category}
              className={cx(
                'flex flex-col gap-2',
                'tablet-sm:flex-row tablet-sm:items-baseline tablet-sm:gap-4',
              )}
            >
              <dt
                className={cx(
                  'text-3xs font-semibold uppercase tracking-wider',
                  'text-tertiary-txt tablet-sm:w-32 tablet-sm:shrink-0',
                )}
              >
                {category}
              </dt>
              <dd className={'flex flex-wrap gap-2'}>
                {items.map((skill) => (
                  <span
                    key={skill.name}
                    style={
                      {
                        '--tint': hexToRgb(skill.color, 1, true),
                      } as CSSProperties
                    }
                    className={cx(
                      'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-2',
                      'text-2xs font-medium text-secondary-txt',
                      'border border-divider bg-transparent',
                      'transition-colors hocus:bg-tint-bg hocus:border-tint-border',
                      'hocus:text-primary-txt',
                    )}
                  >
                    <Icon
                      path={skill.icon}
                      className={'size-4'}
                      style={{ color: skill.color }}
                    />
                    {skill.name}
                  </span>
                ))}
              </dd>
            </div>
          );
        })}
      </dl>
    </Section>
  );
};
