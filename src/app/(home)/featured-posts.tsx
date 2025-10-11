'use client';

import { unstable_cache as cache } from 'next/cache';
import { Suspense } from 'react';

// import { getVolunteeringProjects } from '@/actions/volunteering';
import { Icon } from '@/components/atoms/icon';
import { LinkButton } from '@/components/atoms/link-button';
import { Section } from '@/components/atoms/section';
import cx from '@/utils/cx';
import { getColoredTextClasses } from '@/utils/colored-text';

// ---------------------------
// Volunteering Project Types
// ---------------------------
export interface VolunteeringProject {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  link?: string;
}

// ---------------------------
// Fetch and cache data
// ---------------------------
const getFeaturedVolunteering = cache(
  async (): Promise<VolunteeringProject[]> => {
    try {
      const projects = await getVolunteeringProjects();
      return projects.slice(0, 3);
    } catch (e) {
      console.error('Error loading volunteering projects:', e);
      return [];
    }
  },
  ['featured-volunteering'],
  { revalidate: 86400 },
);

// ---------------------------
// Skeleton Loader
// ---------------------------
const VolunteeringListFallback = () => {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <li
          key={i}
          className="flex flex-col gap-3 p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 animate-pulse"
        >
          <div className="h-40 w-full bg-gray-300 dark:bg-gray-700 rounded-xl" />
          <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />
        </li>
      ))}
    </>
  );
};

// ---------------------------
// Project Item Component
// ---------------------------
const VolunteeringItem = ({ project }: { project: VolunteeringProject }) => (
  <li
    key={project.id}
    className="flex flex-col gap-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-52 object-cover"
    />
    <div className="flex flex-col gap-2 p-4">
      <h3 className="text-xl font-semibold text-brand-600">{project.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
        {project.description}
      </p>
      <span className="text-xs text-gray-500 mt-auto">{project.date}</span>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-brand-500 hover:text-brand-600 mt-2"
        >
          View more →
        </a>
      )}
    </div>
  </li>
);

// ---------------------------
// Featured Volunteering List
// ---------------------------
const FeaturedVolunteeringList = async () => {
  const projects = await getFeaturedVolunteering();
  return (
    <>
      {projects.map((project) => (
        <VolunteeringItem key={project.id} project={project} />
      ))}
    </>
  );
};

// ---------------------------
// Main Section
// ---------------------------
export const FeaturedVolunteering = () => (
  <Section id="volunteering" className="gap-6">
    <div
      className={cx(
        'w-full flex flex-col items-start gap-4',
        'tablet-sm:flex-row tablet-sm:items-center tablet-sm:justify-between',
      )}
    >
      <h2 className={getColoredTextClasses('green')}>Volunteering Work</h2>

      <LinkButton
        title="View all"
        href="/volunteering"
        className={cx('justify-center tablet-sm:w-auto')}
        data-umami-event="View all volunteering projects"
      >
        <Icon
          className="size-5"
          path="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
        />
        <span>View all</span>
      </LinkButton>
    </div>

    <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <Suspense fallback={<VolunteeringListFallback />}>
        <FeaturedVolunteeringList />
      </Suspense>
    </ol>
  </Section>
);
