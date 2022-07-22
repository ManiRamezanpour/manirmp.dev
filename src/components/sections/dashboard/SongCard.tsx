/* eslint-disable max-lines-per-function */
import { mdiSpotify } from '@mdi/js';
import Icon from '@mdi/react';
import { useMemo } from 'react';

import { Img, Link } from '@/components/atoms';
import { useSafePalette } from '@/hooks';
import { TopTrackData } from '@/lib/spotify';
import { useTheme } from '@/providers/theme';
import type { FC } from '@/types';
import { getReadableColor, hexToRGB } from '@/utils';
import { styled } from '~/stitches';

const Card = styled(Link, {
  $$color: '$colors$toolbar-glow',
  $$textColor: '$colors$divider',
  $$borderSize: '1px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  p: '$10',
  gap: '$10',
  backgroundColor: 'rgba($$color / .06)',
  border: '$$borderSize solid $divider',
  borderRadius: '$space$8',
  color: 'rgba($$textColor / .85)',
  transition: 'all .25s ease-in-out',
  maxWidth: '100%',
  dark: {
    backgroundColor: 'rgba($$color / .1)',
  },
  hocus: {
    $$borderSize: '2px',
    p: 'calc($10 - 1px)',
    transform: 'scale(1.0125)',
    boxShadow: '0 0 8px 2px rgba($$color / .2)',
    backgroundColor: 'rgba($$color / .12)',
    borderColor: 'rgba($$textColor / .36)',
    textDecoration: 'none',
    color: 'rgba($$textColor / 1)',
    dark: {
      color: 'rgba($$textColor / 1)',
      backgroundColor: 'rgba($$color / .14)',
    },
    '& p:first-of-type': {
      textDecoration: 'underline',
    },
  },
  variants: {
    notPlaying: {
      true: {
        pointerEvents: 'none',
      },
    },
  },
});

const Texts = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%',
  ellipsize: true,
  '& > p': {
    maxWidth: '100%',
    ellipsize: true,
  },
});

const Title = styled('p', {
  fontSize: '$xs',
  useFont: 'manrope',
  fontWeight: 700,
});

const Subtitle = styled('p', {
  fontSize: '$3xs',
});

interface SongCardProps {
  song?: TopTrackData;
}

export const SongCard: FC<SongCardProps> = (props) => {
  const { song } = props;
  const { data: palette } = useSafePalette(song?.image?.url);
  const { isDark, themeReady } = useTheme();

  const bgColor = useMemo<string>(() => {
    if (!themeReady) return '';
    return hexToRGB(
      isDark ? palette.darkMuted : palette.vibrant,
      undefined,
      true,
    );
  }, [isDark, themeReady, palette]);

  const textColor = useMemo<string>(() => {
    if (!themeReady) return '';
    return hexToRGB(
      getReadableColor(isDark ? palette.vibrant : palette.darkMuted, isDark),
      undefined,
      true,
    );
  }, [isDark, themeReady, palette]);

  if (!song) return null;
  return (
    <Card
      title={`Listen to "${song.title}" by "${song.artist}" on Spotify`}
      href={song.url || '#'}
      underline={false}
      css={{
        ...props.css,
        $$color: bgColor,
        $$textColor: textColor,
        borderColor: song.image ? 'rgba($$textColor / .16)' : undefined,
      }}
      style={props.style}
      className={props.className}
      notPlaying={Object.keys(song).length <= 0}
    >
      {song.image?.url ? (
        <Img
          src={song.image?.url || ''}
          alt={`Album image for song "${song.title}" by "${song.artist}"`}
          width={56}
          height={56}
          css={{ borderRadius: '$space$4' }}
        />
      ) : (
        <Icon path={mdiSpotify} size={1} />
      )}
      <Texts>
        {song.title ? (
          <>
            <Title>{song.title}</Title>
            <Subtitle>
              {song.artist} • {song.album}
            </Subtitle>{' '}
          </>
        ) : (
          <p>Not playing…</p>
        )}
      </Texts>
    </Card>
  );
};