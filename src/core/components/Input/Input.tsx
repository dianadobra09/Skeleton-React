import React, { HTMLInputTypeAttribute, useCallback, useEffect } from 'react';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { StyledInput, StyledInputContainer, StyledLabel, StyledSearchIcon, styles } from './Input.styles';

export interface InputProps {
  type?: HTMLInputTypeAttribute;
  label?: string;
  value?: string | number;
  placeholder?: string;
  isDisabled?: boolean;
  inputStyles?: StyleSystemProps;
  containerStyles?: StyleSystemProps;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = props => {
  const { label, placeholder, value, onChange, type, isDisabled, inputStyles, containerStyles } = props;

  const inputStyling = { ...styles.input(type), ...inputStyles };
  const containerStyling = { ...styles.inputContainer(type), ...containerStyles };

  const [formattedValue, setFormattedValue] = React.useState<any>();

  useEffect(() => {
    if (type !== 'number' && value && !value.toString().endsWith('.') && !isNaN(Number(value))) {
      setFormattedValue(Number(value).toLocaleString());
    } else {
      setFormattedValue(value);
    }
  }, [value]);

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // we can format the value with commas only on text inputs
    if (type !== 'number') {
      const numberValue = e.target.value?.replace(/,/g, '');
      if (numberValue && !numberValue.endsWith('.') && !isNaN(Number(numberValue))) {
        setFormattedValue(Number(numberValue).toLocaleString());
        onChange && onChange(Number(numberValue).toLocaleString());
        return;
      }
    }
    setFormattedValue(e.target.value);
    onChange && onChange(e.target.value);
  }, []);

  return (
    <StyledInputContainer __css={containerStyling}>
      {label && <StyledLabel __css={styles.label}>{label}</StyledLabel>}
      {type === 'search' && (
        <StyledSearchIcon __css={styles.searchIcon}>
          <SearchIcon />
        </StyledSearchIcon>
      )}
      <StyledInput
        as="input"
        id="result_input"
        className="number-separator"
        __css={inputStyling}
        value={formattedValue}
        onChange={handleOnChange}
        placeholder={placeholder}
        type={type}
        disabled={isDisabled}
        step={'.01'}
      />
    </StyledInputContainer>
  );
};

export { Input };
