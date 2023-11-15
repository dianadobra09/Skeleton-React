import React from 'react';
import Select, { StylesConfig, mergeStyles } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useTheme } from 'styled-components';
import { Theme } from '../../styling/config/theme.types';
import { StyledDropdownContainer, StyledLabel, styles } from './Dropdown.styles';
import { Option } from './Dropdown.types';

export interface DropdownProps {
  isDisabled?: boolean;
  isMultiselect?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  placeholder?: string;
  label?: string;
  options?: Option[];
  defaultValue?: Option;
  value?: Option;
  styling?: StylesConfig<Option>;
  allowFreeText?: boolean;
  onOptionChange?: (option: Option | readonly Option[] | null) => void;
}

const Dropdown: React.FC<DropdownProps> = props => {
  const { isDisabled, isMultiselect, isSearchable, isClearable, placeholder, label, defaultValue, value, options, onOptionChange, styling, allowFreeText } = props;
  const { colors, typography } = useTheme() as Theme;

  return (
    <StyledDropdownContainer __css={styles.dropdownContainer}>
      {label && <StyledLabel __css={styles.label}>{label}</StyledLabel>}
      {!allowFreeText && (
        <Select
          isClearable={isClearable}
          isDisabled={isDisabled}
          isMulti={isMultiselect}
          isSearchable={isSearchable}
          closeMenuOnSelect={!isMultiselect}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          options={options}
          getOptionLabel={(option: Option) => option.label}
          getOptionValue={(option: Option) => option.value}
          styles={mergeStyles(styles.dropdown(colors, typography), styling)}
          onChange={options => onOptionChange && onOptionChange(options)}
        />
      )}
      {allowFreeText && (
        <CreatableSelect
          isClearable={isClearable}
          isDisabled={isDisabled}
          isMulti={isMultiselect}
          isSearchable={isSearchable}
          closeMenuOnSelect={!isMultiselect}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          options={options}
          getOptionLabel={(option: Option) => option.label}
          getOptionValue={(option: Option) => option.value}
          styles={mergeStyles(styles.dropdown(colors, typography), styling)}
          onChange={options => onOptionChange && onOptionChange(options)}
        />
      )}
    </StyledDropdownContainer>
  );
};

export { Dropdown };
