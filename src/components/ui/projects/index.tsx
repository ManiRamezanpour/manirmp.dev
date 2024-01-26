import { Section } from '@/components/atoms/section';
import allProjects from '@/data/projects.json';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';

import { ProjectItem } from './item';

interface ProjectsListProps {
  title: string;
  featuredOnly?: boolean;
}

const projects = allProjects.sort((a, b) => a.order - b.order);
export const ProjectsList = (props: ProjectsListProps) => {
  const filteredProjects = props.featuredOnly
    ? projects.filter((it) => !it.hide)
    : projects;
  const Heading = props.featuredOnly ? 'h2' : 'h1';
  return (
    <Section id={'projects'} className={'gap-6'}>
      <div
        className={cx(
          'w-full flex flex-col items-start gap-4',
          'mobile-md:flex-row mobile-md:items-center mobile-md:justify-between',
        )}
      >
        <Heading className={getColoredTextClasses('red', 'red', 'purple')}>
          {props.title}
        </Heading>
      </div>
      <ul>
        {filteredProjects.map((project) => (
          <li key={project.name}>
            <ProjectItem project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
};
