import {
  BackgroundProps,
  BorderRadiusProps,
  BordersProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  OpacityProps,
  OverflowProps,
  PositionProps,
  ResponsiveValue,
  SpaceProps,
  TypographyProps
} from 'styled-system';
import { PseudoProps, PseudoSelectors } from './pseudos';
import { CustomTypographyProps } from './typography.types';
import type { Property } from 'csstype';

type PseudoSelectorDefinition<D> = D | RecursivePseudo<D>;
type RecursivePseudo<D> = {
  [K in PseudoSelectors]?: PseudoSelectorDefinition<D> & D;
};
type CSSDefinition<D> = D | RecursiveCSSSelector<D>;
interface RecursiveCSSSelector<D> {
  [selector: string]: CSSDefinition<D> & D;
}

export type RecursiveCSSObject<D> = D & (D | RecursivePseudo<D> | RecursiveCSSSelector<D>);
export type CSSObject = RecursiveCSSObject<StyleSystemProps>;

export interface CustomStyleProps {
  appearance?: ResponsiveValue<Property.Appearance>;
  backdropFilter?: ResponsiveValue<Property.BackdropFilter>;
  backfaceVisibility?: ResponsiveValue<Property.BackfaceVisibility>;
  cursor?: ResponsiveValue<Property.Cursor>;
  fill?: ResponsiveValue<Property.Fill>;
  filter?: ResponsiveValue<Property.Filter>;
  wordBreak?: ResponsiveValue<Property.WordBreak>;
  mixBlendMode?: ResponsiveValue<Property.MixBlendMode>;
  objectFit?: ResponsiveValue<Property.ObjectFit>;
  objectPosition?: ResponsiveValue<Property.ObjectPosition>;
  outline?: ResponsiveValue<Property.Outline<number>>;
  pointerEvents?: ResponsiveValue<Property.PointerEvents>;
  stroke?: ResponsiveValue<Property.Stroke>;
  textDecoration?: ResponsiveValue<Property.TextDecoration<string>>;
  textOverflow?: ResponsiveValue<Property.TextOverflow>;
  textTransform?: ResponsiveValue<Property.TextTransform>;
  transition?: ResponsiveValue<Property.Transition>;
  transform?: ResponsiveValue<Property.Transform>;
  transformOrigin?: ResponsiveValue<Property.TransformOrigin<string>>;
  transitionDelay?: ResponsiveValue<Property.TransitionDelay<string>>;
  transitionProperty?: ResponsiveValue<Property.TransitionProperty>;
  transitionDuration?: ResponsiveValue<Property.TransitionDuration>;
  transitionTimingFunction?: ResponsiveValue<Property.TransitionTimingFunction>;
  userSelect?: ResponsiveValue<Property.UserSelect>;
  visibility?: ResponsiveValue<Property.Visibility>;
  whiteSpace?: ResponsiveValue<Property.WhiteSpace>;
  willChange?: ResponsiveValue<Property.WillChange>;
  boxSizing?: ResponsiveValue<Property.BoxSizing>;
  aspectRatio?: ResponsiveValue<Property.AspectRatio>;
  float?: ResponsiveValue<Property.Float>;
  accentColor?: ResponsiveValue<Property.AccentColor>;
  writingMode?: ResponsiveValue<Property.WritingMode>;
  textOrientation?: ResponsiveValue<Property.TextOrientation>;
  pseudoContent?: ResponsiveValue<Property.Content>;
}

export interface StyleSystemProps
  extends BoxShadowProps,
    SpaceProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    BackgroundProps,
    BordersProps,
    TypographyProps,
    PositionProps,
    GridProps,
    BorderRadiusProps,
    OpacityProps,
    OverflowProps,
    CustomTypographyProps,
    CustomStyleProps,
    PseudoProps<StyleSystemProps> {}
