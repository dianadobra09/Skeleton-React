import { StylesConfig } from 'react-select';
import styled from 'styled-components';
import { Colors } from '../../styling/config/colors.types';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { Typography } from '../../styling/config/typography.types';
import { Box } from '../Box/Box';
import { Option } from './Dropdown.types';

export const StyledDropdown = styled(Box)``;
export const StyledDropdownContainer = styled(Box)``;
export const StyledLabel = styled(Box)``;

const dropdownContainerStyles: StyleSystemProps = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
};

const labelStyles: StyleSystemProps = {
  color: 'gray11',
  marginBottom: '4px',
  typographyVariant: 'body7'
};

const dropdownStyles = (colors: Colors, typography: Typography): StylesConfig<Option> => {
  const textStyle = typography.variants.body6;
  const textStyles = {
    color: colors.gray13,
    fontSize: textStyle.fontSize,
    fontFamily: textStyle.fontFamily,
    fontWeight: textStyle.fontWeight,
    lineHeight: textStyle.lineHeight,
    fontStyle: textStyle.fontStyle,
    letterSpacing: textStyle.letterSpacing
  };

  return {
    container: styles => ({ ...styles, width: '300px', height: '38px' }),
    control: styles => {
      return {
        ...styles,
        ...textStyles,
        boxShadow: 'none',
        cursor: 'pointer',
        borderRadius: '6px',
        borderColor: colors.gray2,
        backgroundColor: colors.base,
        ':focus': { outline: 'none', borderColor: colors.blue2 },
        ':hover': { outline: 'none', borderColor: colors.gray2 }
      };
    },
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        ...textStyles,
        backgroundColor: isDisabled ? colors.gray4 : colors.base,
        color: isSelected || isFocused ? colors.blue4 : colors.gray13,
        cursor: isDisabled ? 'auto' : 'pointer'
      };
    },
    noOptionsMessage: styles => ({ ...styles, ...textStyles }),
    menu: styles => ({ ...styles, borderRadius: '6px' })
  };
};

export const styles = {
  dropdown: dropdownStyles,
  label: labelStyles,
  dropdownContainer: dropdownContainerStyles
};
