export const rainbowColorsArray = [
  'brand',
  'blue',
  'green',
  'yellow',
  'orange',
  'red',
  'purple',
] as const;

export type RainbowColors = typeof rainbowColorsArray[number];
type GradientColor = `gradient-${RainbowColors}`;
type ShadowColor = `shadow-${RainbowColors}`;

type AccentVariants = 'light' | 'lighter' | 'dark' | 'darker' | 'animoji';
type AccentColor = 'accent' | `accent-${AccentVariants}` | 'on-accent';

type TextColorVariants = 'primary' | 'secondary' | 'tertiary';
type TextColor = `text-${TextColorVariants}`;

type ToolbarColorVariants = 'glow'; // | 'highlight';
type ToolbarColor = 'toolbar' | `toolbar-${ToolbarColorVariants}`;

type Scrollbar = 'scrollbar-bg' | 'scrollbar-thumb';

export type ThemeColorsNames =
  | 'transparent'
  | 'primary'
  | 'background'
  | 'divider'
  | AccentColor
  | GradientColor
  | ShadowColor
  | TextColor
  | ToolbarColor
  | Scrollbar;