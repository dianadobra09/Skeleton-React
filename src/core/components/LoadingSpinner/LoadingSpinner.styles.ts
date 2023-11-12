import styled, { keyframes } from 'styled-components';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { Box } from '../Box/Box';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled(Box)`
  animation: ${spinAnimation} 1s linear infinite;
`;

const spinnerStyles = (size?: string, color?: string): StyleSystemProps => {
  return {
    display: 'inline-block',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '10px',
    borderRightColor: color || 'gray6',
    borderTopColor: color || 'gray6',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    width: size || '0.85em',
    height: size || '0.85em'
  };
};

export const styles = {
  spinner: spinnerStyles
};
