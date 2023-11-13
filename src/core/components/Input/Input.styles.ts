import styled from 'styled-components';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { Box } from '../Box/Box';
import { HTMLInputTypeAttribute } from 'react';

export const StyledInput = styled(Box)``;
export const StyledInputContainer = styled(Box)``;
export const StyledLabel = styled(Box)``;
export const StyledSearchIcon = styled(Box)``;

const inputStyles = (type?: HTMLInputTypeAttribute): StyleSystemProps => {
  return {
    borderRadius: '6px',
    border: '1px solid',
    borderColor: 'gray2',
    height: type === 'search' ? '38px' : '36px',
    color: 'gray13',
    paddingX: '10px',
    paddingY: 0,
    backgroundColor: 'base',
    typographyVariant: 'body6',
    boxSizing: 'border-box',
    _focus: {
      outline: 'none',
      borderColor: 'blue2'
    },
    width: 'inherit',
    paddingLeft: type === 'search' ? '32px' : '10px'
  };
};

const inputContainerStyles = (type?: HTMLInputTypeAttribute): StyleSystemProps => {
  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: type === 'radio' ? undefined : '300px'
  };
};

const labelStyles: StyleSystemProps = {
  color: 'gray11',
  marginBottom: '4px',
  typographyVariant: 'body7',
  width: 'inherit'
};

const searchIconStyles: StyleSystemProps = {
  position: 'absolute',
  bottom: '8px',
  left: '10px',
  color: 'gray7'
};

export const styles = {
  input: inputStyles,
  label: labelStyles,
  inputContainer: inputContainerStyles,
  searchIcon: searchIconStyles
};
