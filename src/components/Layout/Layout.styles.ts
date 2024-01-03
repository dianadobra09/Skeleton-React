import styled from 'styled-components';
import { Box } from '../../core/components/Box/Box';
import { StyleSystemProps } from '../../core/styling/config/styled-system.types';

export const PageBody = styled(Box)``;

const pageBodyStyles: StyleSystemProps = {
  height: '100%',
  display: 'flex',
  padding: 4,
  backgroundColor: 'gray1'
};

export const styles = {
  pageBody: pageBodyStyles
};
