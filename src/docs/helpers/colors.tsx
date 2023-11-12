import React, { useMemo } from 'react';
import { Box } from '../../core/components/Box/Box';
import { Flex } from '../../core/components/Flex/Flex';
import { Color } from '../../core/styling/config/colors.types';
import { createTheme } from '../../core/styling/config/theme';
import { ThemeMode } from '../../core/styling/config/theme.types';
import { StylingProps } from '../../core/types/Core';

export const Colors = ({ palette, themeMode }: { palette: string; themeMode?: ThemeMode }) => {
  const theme = useMemo(() => createTheme(themeMode || ThemeMode.light), [themeMode]);

  const colors: Color[] = useMemo(() => {
    if (palette === 'basic') {
      return (Object.keys(theme.colors) as Color[]).filter(color => color.includes('black') || color.includes('white') || color.includes('transparent'));
    }
    return (Object.keys(theme.colors) as Color[]).filter(color => color.includes(palette));
  }, [theme.colors, palette]);

  return (
    <>
      {colors.map(color => (
        <Flex key={color} alignItems="center">
          <Box border={'1px solid #dfdfdf'} borderRadius={3} width="3rem" height="3rem" marginRight={3} backgroundColor={theme.colors[color]} />
          <Box fontSize={400}>
            <Box fontWeight={500}>{color}</Box>
            <Box fontSize={100} marginTop={1}>
              {theme.colors[color]}
            </Box>
          </Box>
        </Flex>
      ))}
    </>
  );
};

export const GridContainer = (props: StylingProps) => (
  <Box display="grid" marginTop={4} marginBottom={4} gridGap={4} gridTemplateColumns={'repeat( auto-fit, minmax(200px, 1fr) )'} {...props} />
);
