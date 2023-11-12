import { isEmpty } from 'lodash-es';

export const isUndefined = (value: unknown): value is undefined => {
  return typeof value === 'undefined' || value === undefined;
};

export const isNullOrUndefined = <T>(x: T | undefined | null): x is T => {
  return x === undefined || x === null;
};

export const isArray = <T>(value: unknown): value is Array<T> => {
  return Array.isArray(value);
};

export const isString = (value: unknown): value is string => typeof value === 'string';

export const isObject = (value: unknown): value is Record<string, unknown> => {
  return value !== null && typeof value === 'object' && !isArray(value);
};

export const isEmptyObject = (value: unknown) => isObject(value) && isEmpty(value);

export const isEmptyArray = (value: unknown) => isArray(value) && isEmpty(value);

export const isNotNullOrUndefined = <T>(x: T | undefined | null): x is T => {
  return x !== undefined && x !== null;
};
