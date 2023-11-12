import { Theme } from './theme.types';
import { FontSizes, FontWeights, LetterSpacings, LineHeights, TextStyle, Typography } from './typography.types';

const DEFAULT_FONT_SIZE = 16;
const DEFAULT_FONT_FAMILY = 'Nunito';

export const pxToRelativeUnit = (value: number, unit: 'rem' | 'em') => `${value / DEFAULT_FONT_SIZE}${unit}`;
export const pxToRem = (value: number) => pxToRelativeUnit(value, 'rem');
export const pxToEm = (value: number): string => pxToRelativeUnit(value, 'em');

const createTextStyleVariantBuilder = (fontFamily: string) => {
  return (fontWeight: TextStyle['fontWeight'], size: number, lineHeight: TextStyle['lineHeight'], letterSpacing: TextStyle['letterSpacing']): TextStyle => {
    return {
      fontFamily,
      fontWeight,
      fontSize: pxToRem(size),
      lineHeight,
      letterSpacing
    };
  };
};

export const createTypography = (): Pick<Theme, 'typography' | 'fontSizes' | 'fontWeights' | 'lineHeights' | 'letterSpacings'> => {
  const { fontWeights, letterSpacings, lineHeights, ...typographyTokens } = createTypographyTokens();

  const buildVariant = createTextStyleVariantBuilder(DEFAULT_FONT_FAMILY);

  const typography: Typography = {
    variants: {
      body0: buildVariant(fontWeights.regular, 10, lineHeights.shorter, letterSpacings.normal),
      body1: buildVariant(fontWeights.regular, 12, lineHeights.base, letterSpacings.normal),
      body2: buildVariant(fontWeights.medium, 12, lineHeights.base, letterSpacings.normal),
      body3: buildVariant(fontWeights.semibold, 12, lineHeights.base, letterSpacings.normal),
      body4: buildVariant(fontWeights.bold, 12, lineHeights.base, letterSpacings.normal),
      body5: buildVariant(fontWeights.medium, 13, lineHeights.base, letterSpacings.normal),
      body6: buildVariant(fontWeights.regular, 14, lineHeights.base, letterSpacings.normal),
      body7: buildVariant(fontWeights.medium, 14, lineHeights.base, letterSpacings.normal),
      body8: buildVariant(fontWeights.semibold, 14, lineHeights.base, letterSpacings.normal),
      body9: buildVariant(fontWeights.bold, 14, lineHeights.base, letterSpacings.normal),
      body10: buildVariant(fontWeights.medium, 15, lineHeights.base, letterSpacings.normal),

      hed1: buildVariant(fontWeights.semibold, 16, lineHeights.base, letterSpacings.tight),
      hed2: buildVariant(fontWeights.bold, 16, lineHeights.base, letterSpacings.tight),
      hed3: buildVariant(fontWeights.semibold, 18, lineHeights.base, letterSpacings.tight),
      hed4: buildVariant(fontWeights.bold, 18, lineHeights.base, letterSpacings.tight),
      hed5: buildVariant(fontWeights.bold, 20, lineHeights.base, letterSpacings.tight),
      hed6: buildVariant(fontWeights.bold, 22, lineHeights.short, letterSpacings.tight),
      hed7: buildVariant(fontWeights.bold, 24, lineHeights.short, letterSpacings.tight),
      hed8: buildVariant(fontWeights.bold, 30, lineHeights.short, letterSpacings.tight)
    }
  };

  return {
    ...typographyTokens,
    fontWeights,
    typography,
    lineHeights,
    letterSpacings
  };
};

const createTypographyTokens = (): Readonly<{ fontSizes: FontSizes; fontWeights: FontWeights; letterSpacings: LetterSpacings; lineHeights: LineHeights }> => {
  const fontSizes: FontSizes = {
    100: pxToRem(12), // 0.75rem
    200: pxToRem(13), // 0.8125rem
    300: pxToRem(14), // 0.875rem
    400: pxToRem(15), // 0.9375rem
    500: pxToRem(16), // 1rem
    600: pxToRem(17), // 1.0625rem
    700: pxToRem(19), // 1.1875rem
    800: pxToRem(20), // 1.25rem
    900: pxToRem(24), // 1.5rem
    1000: pxToRem(26), // 1.625rem
    1100: pxToRem(28), // 1.75rem
    1200: pxToRem(32), // 2rem
    1300: pxToRem(34), // 2.125rem
    1400: pxToRem(42), // 2.625rem
    1500: pxToRem(48), // 3rem
    1600: pxToRem(56), // 3.5rem
    1700: pxToRem(64), // 4rem
    1800: pxToRem(72), // 4.5rem
    1900: pxToRem(96) // 6re,
  };

  const fontWeights: FontWeights = {
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extraBold: 800,
    black: 900
  };

  const lineHeights: LineHeights = {
    normal: 'normal',
    none: 1,
    shortest: 1.1,
    shorter: 1.2,
    short: 1.3,
    base: 1.4,
    tall: 1.5,
    taller: 1.6,
    tallest: 1.7
  };

  const letterSpacings: LetterSpacings = {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  };

  return { fontSizes, fontWeights, letterSpacings, lineHeights };
};
