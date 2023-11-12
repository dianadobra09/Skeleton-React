import { ResponsiveValue } from 'styled-system';

export type TypographyVariant =
  // Body
  | 'body0'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'body6'
  | 'body7'
  | 'body8'
  | 'body9'
  | 'body10'

  // Hed
  | 'hed1'
  | 'hed2'
  | 'hed3'
  | 'hed4'
  | 'hed5'
  | 'hed6'
  | 'hed7'
  | 'hed8';

export type FontSizeToken = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | 1100 | 1200 | 1300 | 1400 | 1500 | 1600 | 1700 | 1800 | 1900;
export type FontSizes = Readonly<Record<FontSizeToken, string>>;

export type FontWeightToken = 'extraLight' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'extraBold' | 'black';
export type FontWeights = Readonly<Record<FontWeightToken, number>>;

export type LineHeightToken = 'normal' | 'none' | 'shortest' | 'shorter' | 'short' | 'base' | 'tall' | 'taller' | 'tallest';
export type LineHeights = Readonly<Record<LineHeightToken, 'normal' | number>>;

export type LetterSpacingToken = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
export type LetterSpacings = Readonly<Record<LetterSpacingToken, string>>;

export type TextStyle = Readonly<{
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  fontStyle?: string;
  lineHeight: 'normal' | number;
  letterSpacing?: string;
  textTransform?: string;
}>;

export interface Typography {
  variants: Record<TypographyVariant, TextStyle>;
}
export interface CustomTypographyProps {
  typographyVariant?: ResponsiveValue<TypographyVariant>;
}
