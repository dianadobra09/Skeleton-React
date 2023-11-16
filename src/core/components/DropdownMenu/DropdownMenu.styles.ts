import { Menu, MenuButton } from '@szhsin/react-menu';
import styled from 'styled-components';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { Box } from '../Box/Box';

export const StyledMenuButton = styled(MenuButton)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 38px;
`;
export const StyledMenu = styled(Menu)`
  .szh-menu__item {
    padding: 0;
  }

  .szh-menu__submenu > .szh-menu__item {
    padding: 0;
  }

  .szh-menu {
    border-radius: 6px;
    color: ${props => props.theme.colors.gray11};
  }
`;
export const StyledMenuItemContent = styled(Box)``;

const menuItemStyles = (isDisabled?: boolean): StyleSystemProps => {
  return {
    width: '260px',
    height: '38px',
    boxSizing: 'border-box',
    typographyVariant: 'body6',
    backgroundColor: 'base',
    color: isDisabled ? 'gray9' : 'gray11',
    cursor: isDisabled ? 'auto' : 'pointer',
    paddingX: '14px',
    display: 'flex',
    alignItems: 'center',
    _hover: {
      color: isDisabled ? 'gray9' : 'blue4'
    }
  };
};

export const styles = {
  menuItem: menuItemStyles
};
