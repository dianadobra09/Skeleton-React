export type BreakpointAliasKey = 'sm' | 'md' | 'lg' | 'xl';
export type BreakpointAliases = { readonly [P in BreakpointAliasKey]: string | number };

/**
 * `em` based breakpoints. They are not based on the site's font size, but rather the browser's
 * default 16px === 1em ratio that's used by most browsers.
 *
 * Per the spec, `rem` / `em` media queries relate to the `initial` value of the font properties.
 *
 * We don't use `rem` because of a Safari bug where it scales `rem`s in accordance to the `html` element.
 *
 * It is a list where breakpoints values correspond to the indexes and also the breakpoints aliases
 * e.g. [0: "40em", 1: "64em", 2: "90em", 3: "120em", sm: "40em", md: "64em", lg: "90em", xl: "120em"]
 */
export type Breakpoints = string[] & BreakpointAliases;
