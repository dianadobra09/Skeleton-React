import React, { useEffect, useRef } from 'react';
import { CountrySelector, usePhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { Button } from '../Button/Button';
import { StyledInput, StyledInputContainer, StyledLabel, styles } from './PhoneInput.styles';

export interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  isDisabled?: boolean;
  inputStyles?: StyleSystemProps;
  containerStyles?: StyleSystemProps;
  onChange?: (value: string) => void;
}

const PhoneInput: React.FC<InputProps> = props => {
  const { label, placeholder, value, onChange, isDisabled, inputStyles, containerStyles } = props;

  const inputStyling = { ...styles.input, ...inputStyles };
  const containerStyling = {
    ...styles.inputContainer,
    ...containerStyles
  };

  const phoneInput = usePhoneInput({
    defaultCountry: 'us',
    value,
    onChange: data => {
      onChange && onChange(data.phone);
    }
  });

  const inputRef = useRef(null);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (phoneInput.inputRef && inputRef.current?.input) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      phoneInput.inputRef.current = inputRef.current.input;
    }
  }, [inputRef, phoneInput.inputRef]);

  return (
    <StyledInputContainer __css={containerStyling}>
      {label && <StyledLabel __css={styles.label}>{label}</StyledLabel>}
      <CountrySelector
        // selectedCountry={selectedCountry.iso2}
        // onSelect={(country: any) => setSelectedCountry(country)}
        selectedCountry={phoneInput.country.iso2}
        onSelect={country => phoneInput.setCountry(country.iso2)}
        renderButtonWrapper={({ children, rootProps }) => (
          <Button {...rootProps} variant={'empty'} height={'40px'} paddingX={2} backgroundColor={'gray5'}>
            {children}
          </Button>
        )}
        style={styles.countrySelector}
      />
      <StyledInput
        as="input"
        id="result_input"
        className="number-separator"
        __css={inputStyling}
        placeholder={placeholder}
        type={'tel'}
        value={phoneInput.phone}
        onChange={phoneInput.handlePhoneValueChange}
        ref={inputRef}
        disabled={isDisabled}
      />
    </StyledInputContainer>
  );
};

export { PhoneInput };
