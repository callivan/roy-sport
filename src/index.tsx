import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app';

window.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('#root');

  if (!wrapper) return null;

  const root = ReactDOM.createRoot(wrapper);
  root.render(<App />);
});
