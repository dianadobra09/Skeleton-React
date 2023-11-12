import { createBreakpoints } from './breakpoints';
import { createColors } from './colors';
import { Theme, ThemeMode } from './theme.types';
import { createTypography } from './typography';

export const createTheme = (mode: ThemeMode): Readonly<Theme> => {
  const typeTokens = createTypography();
  const breakpoints = createBreakpoints();
  const colors = createColors(mode);

  const theme: Theme = {
    ...typeTokens,
    breakpoints,
    colors
  };

  return theme;
};
