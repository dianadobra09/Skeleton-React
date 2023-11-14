export const useLocalStorage = () => {
  const setItem = (key: string, value: string) => {
    if (!value) {
      localStorage.removeItem(key);
      return;
    }
    localStorage.setItem(key, value);
  };

  const getItem = (key: string) => {
    if (!key) return;
    return localStorage.getItem(key);
  };

  const removeItem = (key: string) => {
    if (!key) return;
    localStorage.removeItem(key);
  };

  return { setItem, getItem, removeItem };
};
