import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';
extend([a11yPlugin]);

export const THEME_COLOR_LIGHT = '#fbfcfe';
export const THEME_COLOR_DARK = '#0c121e';

// Colors from css variables: primary
const bgColor = { dark: THEME_COLOR_DARK, light: THEME_COLOR_LIGHT };
export const getReadableColor = (
  desiredFgColor?: string | null,
  isDark?: boolean,
): string | null => {
  if (!desiredFgColor) return null;
  let fgColor = colord(desiredFgColor);
  while (
    !fgColor.isReadable(bgColor[isDark ? 'dark' : 'light'], {
      level: 'AAA',
    })
  ) {
    fgColor = isDark ? fgColor.lighten() : fgColor.darken();
  }
  return fgColor.toHex();
};

export const hexToRgb = (
  hex?: string | null,
  alpha?: number,
  numbersOnly?: boolean,
): string | null => {
  if (!hex) return null;
  const color = colord(hex).alpha(alpha === 0 ? 0 : alpha || 1);
  const { r, g, b, a } = color.toRgb();
  if (numbersOnly) return `${r} ${g} ${b}`;
  if (alpha) {
    return `rgba(${r} ${g} ${b} / ${a})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};
