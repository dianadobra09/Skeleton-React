import styled from 'styled-components';
import { Box } from '../../../../core/components/Box/Box';
import { StyleSystemProps } from '../../../../core/styling/config/styled-system.types';

export const Container = styled(Box)``;
export const Header = styled(Box)``;
export const ContentContainer = styled(Box)``;
export const Text = styled(Box)``;
export const LogoContainer = styled(Box)``;

const containerStyles: StyleSystemProps = {
  display: 'flex',
  backgroundColor: 'black',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
};

const headerStyles: StyleSystemProps = {
  typographyVariant: 'hed8',
  color: 'white',
  marginBottom: '44px'
};

const textStyles: StyleSystemProps = {
  typographyVariant: 'body6',
  color: 'gray6',
  marginBottom: '24px'
};

const contentContainerStyles: StyleSystemProps = {
  width: '350px'
};

const logoContainerStyles: StyleSystemProps = {
  position: 'absolute',
  top: '44px',
  left: '64px'
};

export const styles = {
  container: containerStyles,
  header: headerStyles,
  contentContainer: contentContainerStyles,
  text: textStyles,
  logoContainer: logoContainerStyles
};
