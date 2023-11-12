import React from 'react';
import { StyledSpinner, styles } from './LoadingSpinner.styles';

interface LoadingSpinnerProps {
  size?: string;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size, color }) => {
  return <StyledSpinner __css={styles.spinner(size, color)} />;
};

export { LoadingSpinner };
