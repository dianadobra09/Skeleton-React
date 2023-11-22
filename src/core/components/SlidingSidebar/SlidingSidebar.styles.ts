import { CSSObject, MenuItemStyles, menuClasses, sidebarClasses } from 'react-pro-sidebar';
import { Theme } from '../../styling/config/theme.types';
import styled from 'styled-components';
import { Box } from '../Box/Box';
import { StyleSystemProps } from '../../styling/config/styled-system.types';

export const Logo = styled(Box)`
  svg {
    height: auto;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const CollapseButton = styled(Box)`
  svg {
    cursor: pointer;
  }
`;

export const MobileButton = styled(Box)``;

const collapseButtonStyles: StyleSystemProps = {
  height: { _: '35px', md: '40px' },
  display: 'flex',
  padding: '16px 22px',
  justifyContent: 'flex-end'
};

const logoStyles: StyleSystemProps = {
  // padding: { _: '24px 24px 0 24px;', md: '32px 30px 0 30px' }
};

const sidebarStyles = (theme: Theme): CSSObject => {
  const textStyle = theme.typography.variants.body7;
  const textStyles = {
    color: theme.colors.gray2,
    fontSize: textStyle.fontSize,
    fontFamily: textStyle.fontFamily,
    fontWeight: textStyle.fontWeight,
    lineHeight: textStyle.lineHeight,
    fontStyle: textStyle.fontStyle,
    letterSpacing: textStyle.letterSpacing
  };
  return {
    [`.${sidebarClasses.container}`]: {
      ...textStyles,
      backgroundColor: theme.colors.gray12,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column'
    },
    [`.${menuClasses.root}`]: {
      paddingTop: '30px',
      paddingBottom: '30px'
    },
    height: 'inherit',
    width: '240px'
  };
};

const sidebarItemStyles = (theme: Theme, collapsed?: boolean): MenuItemStyles => {
  return {
    button: ({ level, active }) => {
      // only apply styles on first level elements of the tree
      if (level !== 0)
        return {
          color: active ? theme.colors.blue4 : theme.colors.gray7,
          backgroundColor: theme.colors.blue6,
          paddingLeft: collapsed ? '30px' : '70px',
          [`&:hover`]: {
            color: theme.colors.blue4,
            backgroundColor: theme.colors.blue6
          }
        };
      return {
        display: 'flex',
        alignItems: 'center',
        padding: '0 22px',
        height: '40px',
        color: active ? theme.colors.blue4 : theme.colors.gray2,
        [`&:hover`]: {
          color: theme.colors.blue4,
          backgroundColor: theme.colors.blue6
        }
      };
    }
  };
};

const mobileButtonStyles: StyleSystemProps = {
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  alignItems: 'center',
  zIndex: 2,
  height: '55px'
};

export const styles = {
  logo: logoStyles,
  sidebar: sidebarStyles,
  sidebarItem: sidebarItemStyles,
  collapseButton: collapseButtonStyles,
  mobileButton: mobileButtonStyles
};
