import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@shared';

import { App } from './app/App';
import { MediaContextProvider } from './app/contexts';

window.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('#root');

  if (!wrapper) return null;

  const root = ReactDOM.createRoot(wrapper);
  root.render(
    <ThemeProvider>
      <MediaContextProvider>
        <App />
      </MediaContextProvider>
    </ThemeProvider>,
  );
});
