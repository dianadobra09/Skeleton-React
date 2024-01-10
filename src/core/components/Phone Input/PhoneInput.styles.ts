import { CSSProperties } from 'react';
import styled from 'styled-components';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { Box } from '../Box/Box';
import { CountrySelector } from 'react-international-phone';
import 'react-international-phone/style.css';

export const StyledInput = styled(Box)`
  ::-webkit-inner-spin-button {
    display: none;
  }
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.gray6};
  }
`;
export const StyledInputContainer = styled(Box)``;
export const StyledLabel = styled(Box)``;
export const StyledSearchIcon = styled(Box)``;
export const StyledCountrySelector = styled(CountrySelector)`
  ul {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.gray13};

    li {
      span {
        font-family: ${({ theme }) => theme.typography.variants.body6.fontFamily};
        font-size: ${({ theme }) => theme.typography.variants.body6.fontSize};
        font-weight: ${({ theme }) => theme.typography.variants.body6.fontWeight};
        line-height: ${({ theme }) => theme.typography.variants.body6.lineHeight};
        letter-spacing: ${({ theme }) => theme.typography.variants.body6.letterSpacing};
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray4};
        color: ${({ theme }) => theme.colors.green1};
      }

      &.react-international-phone-country-selector-dropdown__list-item--focused {
        background-color: ${({ theme }) => theme.colors.gray4};
        color: ${({ theme }) => theme.colors.green1};
      }
    }
  }
`;

const inputStyles: StyleSystemProps = {
  borderRadius: '12px',
  border: '1px solid',
  borderColor: 'gray2',
  height: '38px',
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
  paddingLeft: '64px',
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
  color: 'gray11',
  marginBottom: '4px',
  typographyVariant: 'body7',
  width: '300px'
};

const countrySelectorStyles: CSSProperties = {
  position: 'absolute',
  top: '1px',
  left: '1px'
};

export const styles = {
  input: inputStyles,
  label: labelStyles,
  inputContainer: inputContainerStyles,
  countrySelector: countrySelectorStyles
};
