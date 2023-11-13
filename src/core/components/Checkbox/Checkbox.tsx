import React, { useState } from 'react';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { StyledInput, StyledInputContainer, StyledLabel, styles } from './Checkbox.styles';

export interface CheckboxProps {
  label?: string;
  defaultValue?: boolean;
  placeholder?: string;
  isDisabled?: boolean;
  inputStyles?: StyleSystemProps;
  containerStyles?: StyleSystemProps;
  onChange?: (value: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = props => {
  const { label, placeholder, defaultValue, onChange, isDisabled, inputStyles, containerStyles } = props;

  const inputStyling = { ...styles.input, ...inputStyles };
  const containerStyling = { ...styles.inputContainer, ...containerStyles };

  const [isChecked, setIsChecked] = useState(defaultValue);

  const handleChange = () => {
    onChange && onChange(!isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <StyledInputContainer __css={containerStyling}>
      <StyledInput as="input" __css={inputStyling} checked={isChecked} onChange={handleChange} placeholder={placeholder} type={'checkbox'} disabled={isDisabled} />
      {label && <StyledLabel __css={styles.label}>{label}</StyledLabel>}
    </StyledInputContainer>
  );
};

export { Checkbox };
