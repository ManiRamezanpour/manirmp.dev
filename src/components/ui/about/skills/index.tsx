'use client';
import { useMemo } from 'react';
import type { CSSProperties } from 'react';
import { Icon } from '@/components/atoms/icon';
import { Section } from '@/components/atoms/section';
import { skills } from './data';
import cx from '@/utils/cx';

// Tailwind color classes to randomly pick for borders
const tailwindBorderColors = [
  'border-red-500',
  'border-orange-500',
  'border-amber-500',
  'border-yellow-500',
  'border-lime-500',
  'border-green-500',
  'border-emerald-500',
  'border-teal-500',
  'border-cyan-500',
  'border-sky-500',
  'border-blue-500',
  'border-indigo-500',
  'border-violet-500',
  'border-purple-500',
  'border-fuchsia-500',
  'border-pink-500',
  'border-rose-500',
];

const random = (min: number, max: number) => Math.random() * (max - min) + min;

export const Skills = () => {
  const styledSkills = useMemo(
    () =>
      skills
        .filter((s) => !s.hide)
        .map((skill) => ({
          ...skill,
          border:
            tailwindBorderColors[
              Math.floor(Math.random() * tailwindBorderColors.length)
            ],
          rotate: random(-3, 3),
          scale: random(0.95, 1.1),
          paddingX: random(0.75, 1.25),
          paddingY: random(0.4, 0.7),
          borderRadius: random(0.5, 1.2),
        })),
    [],
  );

  return (
    <Section id="skills" className="py-20 relative overflow-hidden">
        <h2 className="text-4xl font-extrabold text-brand-400 dark:text-brand-100">
          Uses Technologies
        </h2>

      <ul className="flex flex-wrap gap-4 max-w-4xl hovwer:bghite/5 p-6 rounded-md mt-8">
        {styledSkills.map((skill) => (
          <li
            key={skill.name}
            className="transition-transform"
            style={{
              transform: `rotate(${skill.rotate}deg) scale(${skill.scale})`,
            }}
          >
            <span
              className={cx(
                'flex items-center gap-2 border text-xs font-medium cursor-default',
                'bg-background dark:bg-brand-900/10',
                'transition-all duration-300',
                'hover:rotate-0 hover:scale-105 hover:shadow-md hover:bg-brand-200/10',
                skill.border, // random border color
              )}
              style={
                {
                  padding: `${skill.paddingY}rem ${skill.paddingX}rem`,
                  borderRadius: `${skill.borderRadius}rem`,
                } as CSSProperties
              }
            >
              <Icon path={skill.icon} className="size-4 opacity-80" />
              <span>{skill.name}</span>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
};
