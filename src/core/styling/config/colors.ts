import { Colors, darkModeColors, lightModeColors } from './colors.types';
import { ThemeMode } from './theme.types';

export const createColors = (mode: ThemeMode): Colors => {
  return mode === ThemeMode.light ? lightModeColors : darkModeColors;
};
