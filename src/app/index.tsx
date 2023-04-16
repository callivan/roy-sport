import React from 'react';

import { theme, ThemeProvider } from '@shared';

import { MediaContextProvider } from './contexts';
import { Wrapper } from './Wrapper';

export function App() {
  return (
    <ThemeProvider>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100vh',
          backgroundColor: theme.colors.black_dark,
        }}
      >
        <MediaContextProvider>
          <Wrapper />
        </MediaContextProvider>
      </div>
    </ThemeProvider>
  );
}
