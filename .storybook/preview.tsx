import type { Preview } from '@storybook/react';
import React from 'react';
import { CustomThemeProvider } from '../src//core/contexts/CustomTheme.provider';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    Story => (
      <CustomThemeProvider>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </CustomThemeProvider>
    )
  ]
};

export default preview;
