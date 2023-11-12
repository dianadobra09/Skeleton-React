import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BaseComponentProps } from '../types/Core';
import { Theme, ThemeMode } from '../styling/config/theme.types';
import { useChangeThemeSubscriber } from '../hooks/useThemeMode';
import { createTheme } from '../styling/config/theme';

export const CustomThemeProvider: React.FC<BaseComponentProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(createTheme(ThemeMode.light));

  const changeTheme = useCallback((mode: ThemeMode) => {
    const theme = createTheme(mode);
    setTheme(theme);
  }, []);

  useChangeThemeSubscriber(changeTheme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
