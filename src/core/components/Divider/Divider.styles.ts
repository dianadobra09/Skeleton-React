import styled from 'styled-components';
import { Box } from '../Box/Box';
import { DividerPlacement } from './Divider.types';
import { StyleSystemProps } from '../../styling/config/styled-system.types';

export const StyledDivider = styled(Box)``;
export const StyledContainer = styled(Box)``;

const dividerStyles = (placement?: DividerPlacement, length?: string, thickness?: string, color?: string): StyleSystemProps => {
  return placement === 'horizontal'
    ? { width: length ? length : '100%', height: thickness ? thickness : '1px', bg: color ? color : 'gray3' }
    : { height: length ? length : '100%', width: thickness ? thickness : '1px', bg: color ? color : 'gray3' };
};

const containerStyles = (placement?: DividerPlacement, length?: string): StyleSystemProps => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: placement === 'horizontal' ? ' 16px 0' : '0 16px',
    width: length ? length : '100%'
  };
};
export const styles = {
  divider: dividerStyles,
  container: containerStyles
};
