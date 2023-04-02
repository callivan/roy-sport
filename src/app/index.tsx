import React from 'react';

import { ThemeProvider } from '@shared';

export function App() {
  return (
    <ThemeProvider>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          width: '100%',
          height: '100vh',
        }}
      ></div>
    </ThemeProvider>
  );
}
