import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import cx from '@/utils/cx';

interface GitHubEvent {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string };
  payload: {
    action?: string;
    commits?: unknown[];
    pull_request?: { title?: string };
    issue?: { title?: string };
  };
}

const describeEvent = (event: GitHubEvent) => {
  if (event.type === 'PushEvent') {
    const count = event.payload.commits?.length ?? 0;
    return `Pushed ${count || 'new'} ${count === 1 ? 'commit' : 'commits'}`;
  }

  if (event.type === 'PullRequestEvent') {
    const action = event.payload.action ?? 'updated';
    const verb =
      action === 'opened'
        ? 'Opened'
        : action === 'closed'
          ? 'Closed'
          : 'Updated';
    const title = event.payload.pull_request?.title;
    return `${verb} pull request${title ? `: ${title}` : ''}`;
  }

  if (event.type === 'IssuesEvent') {
    const action = event.payload.action ?? 'updated';
    const verb =
      action === 'opened'
        ? 'Opened'
        : action === 'closed'
          ? 'Closed'
          : 'Updated';
    const title = event.payload.issue?.title;
    return `${verb} issue${title ? `: ${title}` : ''}`;
  }

  return 'Created a repository';
};

const getRecentActivity = async (): Promise<GitHubEvent[]> => {
  try {
    const response = await fetch(
      'https://api.github.com/users/Maniramezanpour/events/public?per_page=100',
      {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) return [];

    const events = (await response.json()) as GitHubEvent[];
    const activityTypes = new Set([
      'PushEvent',
      'PullRequestEvent',
      'IssuesEvent',
      'CreateEvent',
    ]);

    return events.filter((event) => activityTypes.has(event.type)).slice(0, 4);
  } catch {
    return [];
  }
};

export const Activity = async () => {
  const events = await getRecentActivity();

  return (
    <Section id={'github-activity'} className={'gap-5'}>
      <div className={'flex flex-wrap items-end justify-between gap-3'}>
        <div className={'flex flex-col gap-1'}>
          <h2 className={'text-xl font-semibold'}>Recent GitHub activity</h2>
          <p className={'text-sm text-tertiary-txt'}>
            A few things I&apos;ve been working on lately.
          </p>
        </div>
        <Link
          title={'View GitHub profile'}
          href={'https://github.com/Maniramezanpour'}
          className={'text-sm font-medium'}
        >
          View profile ↗
        </Link>
      </div>
      {events.length ? (
        <ul
          className={
            'flex flex-col divide-y divide-divider rounded-3 border border-divider'
          }
        >
          {events.map((event) => (
            <li
              key={event.id}
              className={cx(
                'flex flex-col gap-1.5 px-4 py-3 tablet-sm:flex-row',
                'tablet-sm:items-center tablet-sm:justify-between tablet-sm:gap-4',
              )}
            >
              <div className={'min-w-0'}>
                <p className={'truncate text-sm font-medium'}>
                  {describeEvent(event)}
                </p>
                <Link
                  title={`View ${event.repo.name} on GitHub`}
                  href={`https://github.com/${event.repo.name}`}
                  className={'text-sm text-secondary-txt'}
                >
                  {event.repo.name}
                </Link>
              </div>
              <time
                dateTime={event.created_at}
                className={'shrink-0 text-xs text-tertiary-txt'}
              >
                {new Intl.DateTimeFormat('en', {
                  month: 'short',
                  day: 'numeric',
                }).format(new Date(event.created_at))}
              </time>
            </li>
          ))}
        </ul>
      ) : (
        <p
          className={
            'rounded-3 border border-divider px-4 py-3 text-sm text-secondary-txt'
          }
        >
          Recent public activity is unavailable right now. Visit my{' '}
          <Link
            title={'GitHub profile'}
            href={'https://github.com/Maniramezanpour'}
          >
            GitHub profile
          </Link>{' '}
          to see my work.
        </p>
      )}
    </Section>
  );
};
