import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { CSSProperties } from 'react';

import { Icon } from '@/components/atoms/icon';
import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { OutlinedLinkButton } from '@/components/atoms/link-button';
import { Reveal } from '@/components/motion/reveal';
import { MDX } from '@/components/ui/blog/mdx';
import { ShapeFormerDemo } from '@/components/ui/case-study/shapeformer';
import { caseStudies } from '@/content';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';
import { createMetadata } from '@/utils/metadata';

interface CaseStudyPageContext {
  params: { slug?: string };
}

const arrowPath = 'M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z';
const backPath =
  'M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z';

const caseStudyComponents = { ShapeFormerDemo };

const published = caseStudies.filter((it) => !it.draft);
const findCaseStudy = (slug?: string) =>
  slug ? published.find((it) => it.slug === slug) : undefined;

export const generateStaticParams = () =>
  published.map((it) => ({ slug: it.slug }));

export function generateMetadata(
  context: CaseStudyPageContext,
): Metadata | undefined {
  const study = findCaseStudy(context.params.slug);
  if (!study) return undefined;
  return createMetadata({
    title: `${study.title} – Case study – Mani Ramezanpour`,
    description: study.summary,
    exactUrl: `https://manirmp.tech/projects/${study.slug}`,
    keywords: ['case study', 'project', ...study.stack],
  });
}

export default function CaseStudyPage(context: CaseStudyPageContext) {
  const study = findCaseStudy(context.params.slug);
  if (!study) return notFound();

  const tint =
    hexToRgb(study.darkColor || study.color, 1, true) ||
    'var(--color-accent-dark)';
  const facts = [
    { label: 'Role', value: study.role },
    { label: 'Year', value: study.year },
    ...(study.context ? [{ label: 'Context', value: study.context }] : []),
  ];

  return (
    <div
      className={'flex flex-col gap-8'}
      style={{ '--tint': tint } as CSSProperties}
    >
      <Link
        title={'Back to all projects'}
        href={'/projects'}
        className={cx(
          'inline-flex items-center gap-1.5 text-2xs no-underline',
          'text-secondary-txt hocus:text-primary-txt',
        )}
      >
        <Icon className={'size-4'} path={backPath} />
        All projects
      </Link>

      <Reveal>
        <header
          className={cx(
            'relative isolate overflow-hidden flex flex-col gap-5',
            'rounded-5 p-5 tablet-sm:p-6 ring-1 ring-inset ring-divider',
            // eslint-disable-next-line max-len
            'bg-[linear-gradient(150deg,rgba(var(--tint)/0.16),rgba(var(--tint)/0.03)_55%,transparent)]',
          )}
        >
          <Img
            src={study.icon}
            alt={''}
            aria-hidden={'true'}
            width={224}
            height={224}
            className={cx(
              'absolute -z-1 -right-14 -top-14 size-56 opacity-20',
              'blur-2xl saturate-150 pointer-events-none select-none',
            )}
          />
          <div className={'flex flex-row items-center gap-4'}>
            <Img
              src={study.icon}
              alt={`Icon for ${study.title}`}
              width={64}
              height={64}
              className={cx(
                'size-14 tablet-sm:size-16 shrink-0 rounded-3 p-1.5 object-contain',
                'bg-tint-bg ring-1 ring-inset ring-tint-border',
              )}
            />
            <div className={'flex flex-col gap-1'}>
              <span
                className={cx(
                  'inline-flex items-center gap-1.5 text-3xs font-semibold',
                  'uppercase tracking-wider text-tertiary-txt',
                )}
              >
                <span
                  className={'size-1.5 rounded-full bg-[rgb(var(--tint))]'}
                  aria-hidden={'true'}
                />
                Case study
              </span>
              <h1 className={'text-xl font-bold tracking-tight'}>
                {study.title}
              </h1>
            </div>
          </div>

          <p className={'text-xs text-secondary-txt text-pretty max-w-nice'}>
            {study.summary}
          </p>

          <dl className={'grid grid-cols-2 gap-4 tablet-sm:grid-cols-3'}>
            {facts.map((fact) => (
              <div key={fact.label} className={'flex flex-col gap-0.5'}>
                <dt className={'text-3xs text-tertiary-txt'}>{fact.label}</dt>
                <dd className={'m-0 text-2xs font-medium text-primary-txt'}>
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          {study.stack.length ? (
            <ul className={'flex flex-wrap gap-1.5'} aria-label={'Tech stack'}>
              {study.stack.map((tech) => (
                <li
                  key={tech}
                  className={cx(
                    'px-2.5 py-1 rounded-full text-3xs font-medium',
                    'text-secondary-txt bg-tint-bg',
                  )}
                >
                  {tech}
                </li>
              ))}
            </ul>
          ) : null}

          {study.links.length ? (
            <div className={'flex flex-wrap gap-2'}>
              {study.links.map((link) => (
                <OutlinedLinkButton
                  key={link.url}
                  title={link.label}
                  href={link.url}
                  className={'pr-3.5'}
                  data-umami-event={'Case study link'}
                  data-umami-event-project={study.title}
                >
                  <Icon className={'size-4'} path={arrowPath} />
                  <span>{link.label}</span>
                </OutlinedLinkButton>
              ))}
            </div>
          ) : null}
        </header>
      </Reveal>

      <MDX code={study.code} components={caseStudyComponents} />
    </div>
  );
}
