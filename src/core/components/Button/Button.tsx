import React, { useEffect, useRef, useState } from 'react';
import { StylingProps } from '../../types/Core';
import { CenteredFlex, Flex } from '../Flex/Flex';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { StyledButton, StyledEndIcon, StyledStartIcon, styles } from './Button.styles';
import { ButtonIntent, ButtonSize, ButtonVariant } from './Button.types';

export interface ButtonProps extends StylingProps {
  size?: ButtonSize;
  intent?: ButtonIntent;
  variant?: ButtonVariant;
  isLoading?: boolean;
  isDisabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  justifyContent?: string;
  onClick?: (event?: any) => void;
}

const mergeStyles = (size: ButtonSize, intent: ButtonIntent, variant: ButtonVariant, isDisabled?: boolean, restProps: StylingProps = {}) => {
  const sizeStyles = styles.size[size];
  const intentColor = styles.intentColor[intent];
  const variantStyles = styles.variant[variant](intentColor);
  const disabledStyles = isDisabled ? styles.disabled : {};
  const css = restProps?.__css ? restProps.__css : {};

  return { ...styles.button, ...sizeStyles, ...variantStyles, ...disabledStyles, ...restProps, ...css };
};

const Button: React.FC<ButtonProps> = props => {
  const { children, size = 'md', intent = 'primary', variant = 'solid', isLoading, isDisabled, startIcon, endIcon, onClick, justifyContent = 'center', ...restProps } = props;
  const buttonStyles = mergeStyles(size, intent, variant, isDisabled, restProps);

  const contentRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState<number>();

  useEffect(() => {
    if (contentRef && contentRef.current) {
      setWidth(contentRef.current.clientWidth);
    }
  }, [contentRef]);

  return (
    <StyledButton as="button" onClick={onClick} __css={buttonStyles} type="submit">
      {isLoading ? (
        <CenteredFlex width={width}>
          <LoadingSpinner />
        </CenteredFlex>
      ) : (
        <Flex ref={contentRef} width={'100%'} justifyContent={justifyContent}>
          {startIcon && <StyledStartIcon __css={styles.startIcon}>{startIcon}</StyledStartIcon>}
          {children}
          {endIcon && <StyledEndIcon __css={styles.endIcon}>{endIcon}</StyledEndIcon>}
        </Flex>
      )}
    </StyledButton>
  );
};

export { Button };
