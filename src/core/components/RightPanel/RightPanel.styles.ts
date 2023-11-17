import styled from 'styled-components';
import { Box } from '../Box/Box';
import { StyleSystemProps } from '../../styling/config/styled-system.types';

export const Header = styled(Box)``;
export const Container = styled(Box)``;
export const Content = styled(Box)``;
export const CloseButton = styled(Box)``;

const headerStyles: StyleSystemProps = {
  color: 'base',
  height: '54px',
  paddingLeft: 4,
  paddingRight: 3,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'gray12',
  typographyVariant: 'hed3',
  justifyContent: 'space-between'
};

const containerStyles: StyleSystemProps = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'base'
};

const contentStyles: StyleSystemProps = {
  padding: 4,
  display: 'flex',
  height: 'calc(100vh - 54px)',
  boxSizing: 'border-box',
  width: 'fit-content'
};

const closeButtonStyles: StyleSystemProps = {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center'
};

export const styles = {
  header: headerStyles,
  container: containerStyles,
  content: contentStyles,
  closeButton: closeButtonStyles
};
