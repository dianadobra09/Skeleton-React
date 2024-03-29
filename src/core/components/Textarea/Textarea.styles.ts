import styled from 'styled-components';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { Box } from '../Box/Box';

export const StyledInput = styled(Box)`
  ::-webkit-inner-spin-button {
    display: none;
  }
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.gray1};
  }
`;
export const StyledInputContainer = styled(Box)``;
export const StyledLabel = styled(Box)``;
export const StyledSearchIcon = styled(Box)``;

const inputStyles: StyleSystemProps = {
  borderRadius: '12px',
  border: '1px solid',
  borderColor: 'green1',
  height: '84px',
  color: 'white',
  padding: '10px',
  backgroundColor: 'gray5',
  typographyVariant: 'body1',
  boxSizing: 'border-box',
  _focus: {
    outline: 'none',
    borderColor: 'green1'
  },
  maxWidth: '300px',
  minWidth: '300px',
  paddingLeft: '10px',
  accentColor: '#C8FF9D'
};

const inputContainerStyles: StyleSystemProps = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '300px'
};

const labelStyles: StyleSystemProps = {
  color: 'white',
  marginBottom: '4px',
  typographyVariant: 'body1',
  width: 'inherit'
};

export const styles = {
  input: inputStyles,
  label: labelStyles,
  inputContainer: inputContainerStyles
};
