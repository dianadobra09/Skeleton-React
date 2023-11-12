import { BreakpointAliasKey, BreakpointAliases, Breakpoints } from './breakpoints.types';
import { pxToEm } from './typography';

/**
 * Add here any new breakpoints and add the key to the `BreakpointAliasKey` type.
 */
const breakpointsPx: BreakpointAliases = {
  sm: 640,
  md: 1024,
  lg: 1440,
  xl: 1920
};

const breakpointsEm: BreakpointAliases = (Object.keys(breakpointsPx) as BreakpointAliasKey[]).reduce((acc, key) => {
  acc[key] = pxToEm(breakpointsPx[key] as number);
  return acc;
}, {} as { -readonly [K in keyof BreakpointAliases]: BreakpointAliases[K] });

/**
 * Create breakpoints relative to the root font size.
 */
export const createBreakpoints = (): Breakpoints => {
  return Object.assign([], Object.values(breakpointsEm) as number[], breakpointsEm);
};
