import { Breakpoints } from './breakpoints.types';
import { Colors } from './colors.types';
import { FontSizes, FontWeights, LetterSpacings, LineHeights, Typography } from './typography.types';

export enum ThemeMode {
  light = 'light',
  dark = 'dark'
}

export interface Theme {
  breakpoints: Breakpoints;
  colors: Colors;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  letterSpacings: LetterSpacings;
  lineHeights: LineHeights;
  typography: Typography;
}
