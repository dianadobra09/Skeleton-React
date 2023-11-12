import { ReactNode } from 'react';
import { CSSObject, StyleSystemProps } from '../styling/config/styled-system.types';

export interface BaseComponentProps {
  children?: ReactNode;
}

export interface StylingProps extends BaseComponentProps, StyleSystemProps {
  component?: keyof JSX.IntrinsicElements | React.ComponentType<unknown>;
  transitionProperties?: string[];
  __css?: CSSObject;
}
type WithoutStyleAttr<T> = Omit<T, 'color' | 'width' | 'height'>;

export type HTMLProps<C = unknown> = WithoutStyleAttr<React.HTMLAttributes<C>> & React.RefAttributes<C>;

export type Booleanish = boolean | 'true' | 'false';
export type Maybe<T> = T | undefined | null;
export type NonMaybe<T> = T extends null | undefined ? never : T;
export type Nullable<T> = T | null;
