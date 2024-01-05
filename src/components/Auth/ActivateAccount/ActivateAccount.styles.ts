import styled from 'styled-components';
import { Box } from '../../../core/components/Box/Box';
import { StyleSystemProps } from '../../../core/styling/config/styled-system.types';

export const Container = styled(Box)``;
export const LogoContainer = styled(Box)``;
export const SubmitContainer = styled(Box)``;
export const Header = styled(Box)``;
export const InputContainer = styled(Box)`
  div {
    color: white;
  }
`;

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
  marginBottom: '24px'
};

const inputStyles: StyleSystemProps = {
  backgroundColor: 'black',
  borderColor: 'gray6',
  color: 'gray6',
  _focus: {
    outline: 'none',
    borderColor: 'blue4'
  }
};

const inputContainerStyles: StyleSystemProps = {
  width: '350px'
};

const submitContainerStyles: StyleSystemProps = {
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  marginTop: '24px',
  marginBottom: '8px'
};

const logoContainerStyles: StyleSystemProps = {
  position: 'absolute',
  top: '44px',
  left: '64px'
};

export const styles = {
  container: containerStyles,
  header: headerStyles,
  input: inputStyles,
  submitContainer: submitContainerStyles,
  logoContainer: logoContainerStyles,
  inputContainer: inputContainerStyles
};
