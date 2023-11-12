import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { CustomThemeProvider } from '../core/contexts/CustomTheme.provider';
import { NotificationToastProvider } from '../core/contexts/NotificationToast.provider';
import { BaseComponentProps } from '../core/types/Core';
import ErrorBoundary from '../core/contexts/ErrorBoundary';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  };
  #root {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    font-family: 'Nunito', sans-serif;
  }
`;

export const Providers: React.FC<BaseComponentProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <CustomThemeProvider>
        <NotificationToastProvider />

        <BrowserRouter>
          <>
            <GlobalStyle />
            {children}
          </>
        </BrowserRouter>
      </CustomThemeProvider>
    </ErrorBoundary>
  );
};
