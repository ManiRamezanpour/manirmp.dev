'use client';

import type { Route } from 'next';

import { Img } from '@/components/atoms/img';
import { useRequest } from '@/hooks/use-request';
import type { NowPlayingAPIResponse } from '@/types/spotify/request';
import cx from '@/utils/cx';

import {
  ActivityCard,
  BackgroundImage,
  Content,
  Header,
  MusicBar,
  MusicBarsGroup,
  Texts,
  TrackArtist,
  TrackName,
} from './activity.styles';

export const Music = () => {
  const { data, loading } =
    useRequest<NowPlayingAPIResponse>('/api/now-playing');
  const { track, isPlaying } = data || {};
  return (
    <ActivityCard
      title={
        !track ? 'Loading…' : `"${track.name}" by "${track.artist}" on Spotify`
      }
      href={(track?.url || '#') as Route}
      target={'_blank'}
      className={cx(
        loading ? 'motion-safe:animate-pulse' : '',
        loading ? 'select-none pointer-events-none' : '',
      )}
      aria-disabled={loading}
      data-umami-event={
        loading ? '-' : isPlaying ? 'Now Playing' : 'Last Played'
      }
      data-umami-event-from={'Activity'}
    >
      <BackgroundImage
        alt={
          !track
            ? 'Loading…'
            : `Album cover: "${track.album}" by "${track.artist}"`
        }
        src={track?.image?.url || ''}
        size={78}
        quality={50}
        className={cx(
          isPlaying
            ? 'motion-safe:animate-spin'
            : loading
              ? 'hidden invisible'
              : '',
        )}
      />
      <Content className={'bg-white/65 dark:bg-brand-900/35'}>
        <Img
          alt={
            !track ? '' : `Album cover: "${track.album}" by "${track.artist}"`
          }
          src={track?.image?.url || ''}
          size={track?.image?.width || 78}
          className={cx(
            'rounded-1',
            'aspect-square w-auto h-full',
            'max-w-full max-h-[72px] tablet-sm:max-h-[78px]',
            'border border-divider transition',
            'scale-95 group-hocus/track:scale-100',
          )}
        />
        <Texts className={'mix-blend-hard-light'}>
          <Header>
            <span>
              {loading ? 'Loading' : isPlaying ? 'Now Playing' : 'Last Played'}
            </span>
            {isPlaying ? (
              <MusicBarsGroup>
                <MusicBar />
                <MusicBar className={'[animation-delay:-2.2s]'} />
                <MusicBar className={'[animation-delay:-3.7s]'} />
              </MusicBarsGroup>
            ) : null}
          </Header>
          <TrackName
            className={cx(
              loading ? 'bg-divider' : '',
              isPlaying ? 'group-hocus/track:decoration-wavy' : '',
            )}
          >
            {track?.name}
          </TrackName>
          <TrackArtist className={cx(loading ? 'bg-divider' : '')}>
            {track?.artist}
          </TrackArtist>
        </Texts>
      </Content>
    </ActivityCard>
  );
};
