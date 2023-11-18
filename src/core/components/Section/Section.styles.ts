import styled from 'styled-components';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { Box } from '../Box/Box';

export const StyledSection = styled(Box)``;

const sectionStyles: StyleSystemProps = {
  display: 'flex',
  border: '1px solid',
  borderColor: 'gray2',
  borderRadius: '8px',
  backgroundColor: 'white',
  width: 'auto',
  height: '100%'
};

export const styles = {
  section: sectionStyles
};
