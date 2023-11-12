/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Originally from
 * - https://github.com/styled-system/styled-system/blob/master/packages/core/src/index.js
 * - https://github.com/styled-system/styled-system/blob/master/packages/variant/src/index.js
 *
 * These functions have been adapted to:
 * - handle recursive css objects
 * - stubbed typing since the source is not typed, and the @type definitions are weak at best.
 * - handle pseudo selectors
 */

import assign from 'object-assign';
import dm from 'deepmerge';
import type { styleFn, Scale, ConfigStyle } from 'styled-system';
import {
  createParser as cpLib,
  system as systemLib,
  compose as composeLib,
  variant as variantLib,
  createStyleFunction as createStyleFnLib,
  background,
  borderRadius,
  borders,
  color,
  flexbox,
  grid,
  layout,
  opacity,
  overflow,
  position,
  space,
  typography
} from 'styled-system';
import { isObject } from 'lodash-es';
import { css } from 'styled-components';
import { StylingProps } from '../../types/Core';
import { pseudoSelectors } from './pseudos';
import { CustomStyleProps } from './styled-system.types';
import { isNotNullOrUndefined } from '../../utils/assertions';

type Dict<T = any> = Record<string, T>;

const deepmerge = (a: Dict, b: Dict): Dict => {
  return dm(a, b, { arrayMerge: (target, source) => source });
};

const merge = (a: Dict, b: Dict) => {
  const result = assign({}, a, b);
  for (const key in a) {
    if (!a[key] || typeof b[key] !== 'object') continue;
    assign(result, {
      [key]: assign(a[key], b[key])
    });
  }
  return result;
};

// sort object-value responsive styles
const sort = (obj: Dict) => {
  const next = {};
  Object.keys(obj)
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: 'base'
      })
    )
    .forEach(key => {
      next[key] = obj[key];
    });
  return next;
};

const defaults = {
  breakpoints: [40, 52, 64].map(n => n + 'em')
};
const createMediaQuery = (n: string) => `@media screen and (min-width: ${n})`;
const getValue = (n: string, scale: Scale) => get(scale, n, n);

const get = (obj: Scale, key: any, def: any, p?: any, undef?: any) => {
  key = key && key.split ? key.split('.') : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};

const createParser: typeof cpLib = config => {
  const cache: any = {};
  const parse: styleFn = props => {
    const { theme, ...restProps } = props;
    let styles = {};
    let shouldSort = false;
    const isCacheDisabled = true; //theme && theme.disableStyledSystemCache;

    cache.breakpoints = (!isCacheDisabled && cache.breakpoints) || get(theme, 'breakpoints', defaults.breakpoints);
    cache.media = (!isCacheDisabled && cache.media) || [null, ...cache.breakpoints.map(createMediaQuery)];

    for (let key in restProps) {
      const raw = props[key];

      /////////////////////////////////
      // That new new
      if (key in pseudoSelectors) {
        key = pseudoSelectors[key];
      }

      // `sx` is the transform function used to handle a given prop
      const sx = config[key];

      if (!sx && isObject(raw)) {
        // This is a nested css object -- must recursively transform the items
        styles[key] = styles[key] ?? {};
        styles[key] = deepmerge(styles[key], parse({ ...raw, theme }));
        continue;
      }

      // Done
      /////////////////////////////////

      if (!config[key]) continue;

      const scale = get(theme, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        if (Array.isArray(raw)) {
          styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
          continue;
        }
        if (raw !== null) {
          styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
          shouldSort = true;
        }
        continue;
      }

      assign(styles, sx(raw, scale, props));
    }

    // sort object-based responsive styles
    if (shouldSort) {
      styles = sort(styles);
    }

    return styles;
  };
  parse.config = config;
  parse.propNames = Object.keys(config);
  parse.cache = cache;

  const keys = Object.keys(config).filter(k => k !== 'config');
  if (keys.length > 1) {
    keys.forEach(key => {
      parse[key] = createParser({ [key]: config[key] });
    });
  }
  return parse;
};

const parseResponsiveStyle = (mediaQueries: any, sx: any, scale: any, raw: any, _props: any) => {
  const styles = {};
  raw.slice(0, mediaQueries.length).forEach((value: any, i: number) => {
    const media = mediaQueries[i];
    const style = sx(value, scale, _props);
    if (!media) {
      assign(styles, style);
    } else {
      assign(styles, {
        [media]: assign({}, styles[media], style)
      });
    }
  });
  return styles;
};

const parseResponsiveObject = (breakpoints: any, sx: any, scale: any, raw: any, _props: any) => {
  const styles = {};
  for (const key in raw) {
    const breakpoint = breakpoints[key];
    const value = raw[key];
    const style = sx(value, scale, _props);
    if (!breakpoint) {
      assign(styles, style);
    } else {
      const media = createMediaQuery(breakpoint);
      assign(styles, {
        [media]: assign({}, styles[media], style)
      });
    }
  }
  return styles;
};

export const createStyleFunction: typeof createStyleFnLib = ({ properties, property, scale, transform = getValue, defaultScale }: any) => {
  properties = properties || [property];
  const sx = (value: string, scale: Scale, _props?: any) => {
    const result = {};
    const n = transform(value, scale, _props);
    if (n === null) return;
    properties.forEach((prop: any) => {
      result[prop] = n;
    });
    return result;
  };
  sx.scale = scale;
  sx.defaults = defaultScale;
  return sx;
};

// new v5 API
export const system: typeof systemLib = (args = {}) => {
  const config = {};
  Object.keys(args).forEach(key => {
    const conf = args[key];
    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key
      } as ConfigStyle);
      return;
    }
    if (typeof conf === 'function') {
      config[key] = conf;
      return;
    }
    config[key] = createStyleFunction(conf as ConfigStyle);
  });

  const parser = createParser(config);
  return parser;
};

const compose: typeof composeLib = (...parsers) => {
  const config = {};
  parsers.forEach(parser => {
    if (!parser || !parser.config) return;
    assign(config, parser.config);
  });
  const parser = createParser(config);

  return parser;
};

export const variant: typeof variantLib = ({
  scale,
  prop = 'variant',
  // enables new api
  variants = {},
  // shim for v4 API
  key
}) => {
  let sx: any;
  if (Object.keys(variants).length) {
    sx = (value: any, scale: any, props: any) => css(get(scale, value, null))(props.theme);
  } else {
    sx = (value: any, scale: any) => get(scale, value, null);
  }
  sx.scale = scale || key;
  sx.defaults = variants;
  const config = {
    [prop as string]: sx
  } as ConfigStyle;
  const parser = createParser(config);
  return parser;
};

const typographyVariant = variant({
  prop: 'typographyVariant',
  scale: 'typography.variants'
});

const customStyleDefinitions: Readonly<Record<keyof CustomStyleProps, boolean>> = {
  appearance: true,
  backdropFilter: true,
  backfaceVisibility: true,
  cursor: true,
  fill: true,
  filter: true,
  mixBlendMode: true,
  objectFit: true,
  objectPosition: true,
  outline: true,
  pointerEvents: true,
  stroke: true,
  textDecoration: true,
  textOverflow: true,
  textTransform: true,
  transition: true,
  transform: true,
  transformOrigin: true,
  transitionDuration: true,
  transitionDelay: true,
  transitionProperty: true,
  transitionTimingFunction: true,
  userSelect: true,
  visibility: true,
  whiteSpace: true,
  willChange: true,
  wordBreak: true,
  boxSizing: true,
  aspectRatio: true,
  float: true,
  accentColor: true,
  writingMode: true,
  textOrientation: true,
  pseudoContent: true
};

const customStyleConfig = system(customStyleDefinitions);

const systemProps = compose(space, color, flexbox, layout, background, borders, typography, position, grid, borderRadius, opacity, overflow, typographyVariant, customStyleConfig);

const SYSTEM_PROP_SET = new Set([...(systemProps.propNames || [])] as string[]);

const isStyleProp = (prop: string) => SYSTEM_PROP_SET.has(prop) || prop in pseudoSelectors;

const _objectFilter = <T extends Dict>(object: T, fn: (value: unknown, key: keyof Dict, object: T) => boolean) => {
  const result: Dict = {};

  Object.keys(object).forEach(key => {
    const value = object[key];
    const shouldPass = fn(value, key, object);
    if (shouldPass) {
      result[key] = value;
    }
  });

  return result;
};

const filterProps = (props = {}) => {
  return _objectFilter(props, (value, key) => isNotNullOrUndefined(value) && isStyleProp(key));
};

export const styleSystemPropsParser = <Theme>(props: StylingProps & { theme: Theme }) => {
  const { theme, __css = {}, ...restProps } = props;

  const styles = deepmerge(__css, filterProps(restProps));

  return systemProps({ theme, ...styles });
};
