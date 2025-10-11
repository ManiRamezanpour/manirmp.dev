'use client';
import { useMemo } from 'react';
import type { CSSProperties } from 'react';
import { Icon } from '@/components/atoms/icon';
import { Section } from '@/components/atoms/section';
import { skills } from './data';
import cx from '@/utils/cx';

// Tailwind color classes to randomly pick for borders
const tailwindBorderColors = [
  'border-red-400',
  'border-orange-400',
  'border-amber-400',
  'border-yellow-400',
  'border-lime-400',
  'border-green-400',
  'border-emerald-400',
  'border-teal-400',
  'border-cyan-400',
  'border-sky-400',
  'border-blue-400',
  'border-indigo-400',
  'border-violet-400',
  'border-purple-400',
  'border-fuchsia-400',
  'border-pink-400',
  'border-rose-400',
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
        <h2 className="text-4xl font-extrabold text-brand-600 dark:text-brand-400">
          Uses Technologies
        </h2>

      <ul className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto hovwer:bghite/5 p-6 rounded-md mt-8">
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
