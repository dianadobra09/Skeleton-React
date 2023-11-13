import styled from 'styled-components';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { Box } from '../Box/Box';

export const StyledInput = styled(Box)``;
export const StyledInputContainer = styled(Box)``;
export const StyledLabel = styled(Box)``;

const inputStyles: StyleSystemProps = {
  height: '24px',
  marginRight: '8px',
  accentColor: '#00eef3'
};

const inputContainerStyles: StyleSystemProps = {
  display: 'flex',
  alignItems: 'center'
};

const labelStyles: StyleSystemProps = {
  color: 'gray11',
  typographyVariant: 'body7',
  width: 'inherit'
};

export const styles = {
  input: inputStyles,
  label: labelStyles,
  inputContainer: inputContainerStyles
};
