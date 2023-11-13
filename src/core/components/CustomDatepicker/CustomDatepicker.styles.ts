import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { Box } from '../Box/Box';
import { StyleSystemProps } from '../../styling/config/styled-system.types';

export const Header = styled(Box)``;
export const Container = styled(Box)`
  .react-datepicker__close-icon {
    top: -8px;
    right: 32px;
  }
  .react-datepicker__close-icon::after {
    font-size: 16px;
    padding: 0;
    color: ${props => props.theme.colors.gray7};
    border: 1px solid ${props => props.theme.colors.gray7};
    background-color: ${props => props.theme.colors.white};
  }
`;
export const Label = styled(Box)``;
export const StyledDatePicker = styled(DatePicker)``;

const containerStyles: StyleSystemProps = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
};

const labelStyles: StyleSystemProps = {
  color: 'gray11',
  marginBottom: '4px',
  typographyVariant: 'body7',
  width: 'inherit'
};

export const styles = {
  label: labelStyles,
  container: containerStyles
};
