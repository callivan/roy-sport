import 'normalize.css';
import React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';

import './fonts/index.css';
import { GlobalStyle } from './Global';
import { theme } from './theme';

export const ThemeProvider: React.FC<{ children?: React.ReactElement }> = ({ children }) => (
  <OriginalThemeProvider theme={theme}>
    {children}

    <GlobalStyle />
  </OriginalThemeProvider>
);
