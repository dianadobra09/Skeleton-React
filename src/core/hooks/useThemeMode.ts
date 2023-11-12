import { Subject } from 'rxjs';
import { ThemeMode } from '../styling/config/theme.types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ReactComponent as LogoWhite } from '../../assets/logo/logo.svg';
import { ReactComponent as LogoBlack } from '../../assets/logo/logo.svg';

const themeSubject = new Subject<ThemeMode>();

export const useCustomTheme = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.light);

  const changeTheme = useCallback((mode: ThemeMode) => {
    setThemeMode(mode);
    themeSubject.next(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    themeMode === ThemeMode.light ? changeTheme(ThemeMode.dark) : changeTheme(ThemeMode.light);
  }, [themeMode]);

  const logo = useMemo(() => {
    return themeMode === ThemeMode.light ? LogoBlack : LogoWhite;
  }, [themeMode]);

  return { changeTheme, toggleTheme, logo, themeMode };
};

export const useChangeThemeSubscriber = (callback: (mode: ThemeMode) => void) => {
  useEffect(() => {
    const subscription = themeSubject.subscribe(callback);
    return () => subscription.unsubscribe();
  }, [callback]);
};
