import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyles } from '../src/utils/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '../src/utils/themes';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  viewport: {
    viewports: MINIMAL_VIEWPORTS
  }
};

// add GlobalStyle for every story
const GlobalStyleDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);
addDecorator(GlobalStyleDecorator);

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);