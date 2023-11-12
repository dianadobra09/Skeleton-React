import { Component } from 'react';
import { ReactComponent as Logo } from '../../assets/logo/logo.svg';
import { Box } from '../components/Box/Box';
import { CenteredFlex } from '../components/Flex/Flex';
import { StyleSystemProps } from '../styling/config/styled-system.types';
import { BaseComponentProps } from '../types/Core';

const containerStyles: StyleSystemProps = {
  display: 'flex',
  backgroundColor: 'black',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
};

const logoContainerStyles: StyleSystemProps = {
  position: 'absolute',
  top: '44px',
  left: '64px'
};

interface ErrorBoundaryState {
  hasError: boolean;
  error: unknown;
  errorInfo: unknown;
}

class ErrorBoundary extends Component<BaseComponentProps, ErrorBoundaryState> {
  constructor(props: BaseComponentProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box __css={containerStyles}>
          <Box __css={logoContainerStyles}>
            <Logo height={'70px'} width={'100%'} />
          </Box>
          <CenteredFlex typographyVariant={'hed2'} width={'100%'} height={'100%'}>
            Oops.. something went wrong. Please try again later.
          </CenteredFlex>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
