import { useCallback } from 'react';

export const useLocalStorage = () => {
  const setItem = useCallback((key: string, value: string) => {
    if (!value) {
      localStorage.removeItem(key);
      return;
    }
    localStorage.setItem(key, value);
  }, []);

  const getItem = useCallback((key: string) => {
    if (!key) return;
    return localStorage.getItem(key);
  }, []);

  const removeItem = useCallback((key: string) => {
    if (!key) return;
    localStorage.removeItem(key);
  }, []);

  return { setItem, getItem, removeItem };
};
