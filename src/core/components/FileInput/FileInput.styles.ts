import styled from 'styled-components';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { Box } from '../Box/Box';

export const StyledInput = styled(Box)``;
export const StyledInputContainer = styled(Box)``;
export const StyledLabel = styled(Box)``;
export const StyledSearchIcon = styled(Box)``;

const inputStyles: StyleSystemProps = {
  typographyVariant: 'body6',
  boxSizing: 'border-box',
  _focus: {
    outline: 'none',
    borderColor: 'blue2'
  },
  width: 'inherit',
  paddingY: '10px',
  display: 'none'
};

const labelStyles: StyleSystemProps = {
  color: 'gray11',
  marginBottom: '4px',
  typographyVariant: 'body7',
  width: 'inherit'
};

export const styles = {
  input: inputStyles,
  label: labelStyles
};
