import React from 'react';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { StyledInput, StyledInputContainer, StyledLabel, styles } from './Textarea.styles';

export interface InputProps {
  label?: string;
  value?: string | number;
  placeholder?: string;
  isDisabled?: boolean;
  inputStyles?: StyleSystemProps;
  containerStyles?: StyleSystemProps;
  onChange?: (value: string) => void;
}

const Textarea: React.FC<InputProps> = props => {
  const { label, placeholder, value, onChange, isDisabled, inputStyles, containerStyles } = props;

  const inputStyling = { ...styles.input, ...inputStyles };
  const containerStyling = {
    ...styles.inputContainer,
    ...containerStyles
  };

  return (
    <StyledInputContainer __css={containerStyling}>
      {label && <StyledLabel __css={styles.label}>{label}</StyledLabel>}
      <StyledInput
        as="textarea"
        id="result_input"
        className="number-separator"
        __css={inputStyling}
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        disabled={isDisabled}
      />
    </StyledInputContainer>
  );
};

export { Textarea };
