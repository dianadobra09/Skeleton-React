import styled from 'styled-components';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { Box } from '../Box/Box';

export const StyledContainer = styled(Box)``;
export const StyledMenuItem = styled(Box)``;
export const StyledMenuButton = styled(Box)``;

const containerStyles: StyleSystemProps = {
  height: '64px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: 'base',
  borderColor: 'gray4',
  borderWidth: '1px',
  borderBottomStyle: 'solid',
  position: 'relative',
  paddingX: '34px',
  zIndex: 1,
  top: 0,
  left: 0
};

const menuItemStyles: StyleSystemProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%'
};

const menuButtonStyles: StyleSystemProps = {
  display: 'flex',
  typographyVariant: 'hed4',
  color: 'gray11'
};

const inputStyles: StyleSystemProps = {
  border: 'none',
  borderBottom: '1px solid rgb(163, 167, 171)',
  borderRadius: 0,
  paddingLeft: 0,
  width: '200px',
  _focus: {
    outline: 'none',
    borderColor: 'blue4'
  }
};

const inputContainerStyles: StyleSystemProps = {
  width: '200px'
};

export const styles = {
  container: containerStyles,
  menuItem: menuItemStyles,
  menuButton: menuButtonStyles,
  input: inputStyles,
  inputContainer: inputContainerStyles
};
