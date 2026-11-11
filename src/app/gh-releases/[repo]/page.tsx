import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Icon } from '@/components/atoms/icon';
import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import type { RequestContext } from '@/types/request';
import { createMetadata } from '@/utils/metadata';

import { getRepoReleaseData } from './data';
import { Downloader } from './downloader';

const releasesRepos = ['Frames', 'Blueprint', 'Kuper', 'ChipView', 'FABsMenu'];

type ReleasePageContext = RequestContext<{ repo?: string }>;

export default async function ReleasePage(context: ReleasePageContext) {
  const repo = releasesRepos.find(
    (it) => it.toLowerCase() === context.params.repo?.toLowerCase(),
  );
  if (!repo) return notFound();

  const data = await getRepoReleaseData(repo);
  const success = data?.success;
  return (
    <Section id={'github-release'} className={'items-start gap-4'}>
      <span
        className={
          success
            ? 'grid size-14 place-items-center rounded-full bg-green-500/10 text-green-500'
            : 'grid size-14 place-items-center rounded-full bg-orange-500/10 text-orange-500'
        }
      >
        <Icon
          className={'size-7'}
          path={
            success
              ? 'M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'
              : 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z'
          }
        />
      </span>
      <h1 className={'text-2xl font-bold'}>
        {success ? 'Download started!' : 'Download unavailable'}
      </h1>
      <p className={'text-secondary-txt'}>
        {success
          ? 'Feel free to close this tab 😉'
          : 'Direct download is not available right now.'}
      </p>
      {success ? null : (
        <p>
          Please follow this link to&nbsp;
          <Link title={'GitHub releases link'} href={data?.download || '#'}>
            GitHub Releases
          </Link>{' '}
          …
        </p>
      )}
      <p className={'text-sm text-tertiary-txt'}>
        GitHub:{' '}
        <Link
          title={'Mani Ramezanpour on GitHub'}
          href={'https://github.com/Maniramezanpour'}
        >
          @Maniramezanpour
        </Link>
        {' · '}
        <Link
          title={'Arshia Shirzad on GitHub'}
          href={'https://github.com/arshiashirzad'}
        >
          @arshiashirzad
        </Link>
      </p>
      <Downloader url={success ? data.download : null} />
    </Section>
  );
}

export const generateStaticParams = () =>
  releasesRepos.map((it) => ({ repo: it.toLowerCase() }));

export function generateMetadata(
  context: ReleasePageContext,
): Metadata | undefined {
  const repo = releasesRepos.find(
    (it) => it.toLowerCase() === context.params.repo,
  );
  if (!repo) return undefined;

  return createMetadata({
    title: `${repo} Release Download – Mani Ramezanpour`,
    description: `Download the latest release artifacts from the ${repo} repository on GitHub`,
    exactUrl: `https://manirmp.tech/gh-releases/${repo}`,
  });
}
