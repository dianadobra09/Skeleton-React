import styled from 'styled-components';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { Box } from '../Box/Box';
import { CenteredFlex } from '../Flex/Flex';
import { ButtonIntent, ButtonSize, ButtonVariant } from './Button.types';

export const StyledButton = styled(Box)``;
export const StyledStartIcon = styled(CenteredFlex)``;
export const StyledEndIcon = styled(CenteredFlex)``;

const sizeStyles: Record<ButtonSize, StyleSystemProps> = {
  sm: {
    height: '32px',
    paddingX: '12px',
    typographyVariant: 'body1'
  },
  md: {
    height: '38px',
    paddingX: '14px',
    typographyVariant: 'body7'
  },
  lg: {
    height: '38px',
    width: '100%',
    paddingX: '14px',
    typographyVariant: 'body7'
  }
};

const intentColor: Record<ButtonIntent, string> = {
  primary: 'blue4',
  success: 'green3',
  warning: 'yellow3',
  danger: 'red3',
  neutral: 'gray11'
};

const variantStyles: Record<ButtonVariant, (color: string) => StyleSystemProps> = {
  solid: (color: string) => ({
    backgroundColor: color,
    color: 'white',
    border: 'none'
  }),
  outline: (color: string) => ({
    backgroundColor: 'transparent',
    color: color,
    border: '1px solid',
    borderColor: 'gray2'
  }),
  empty: (color: string) => ({
    backgroundColor: 'transparent',
    color: color,
    border: 'none'
  })
};

const disabledStyles: StyleSystemProps = {
  opacity: 0.5,
  cursor: 'not-allowed'
};

const buttonStyles: StyleSystemProps = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '6px',
  width: 'fit-content',
  cursor: 'pointer'
};

const startIconStyles: StyleSystemProps = {
  marginRight: 2
};

const endIconStyles: StyleSystemProps = {
  marginLeft: 2
};

export const styles = {
  size: sizeStyles,
  intentColor,
  variant: variantStyles,
  disabled: disabledStyles,
  button: buttonStyles,
  startIcon: startIconStyles,
  endIcon: endIconStyles
};
