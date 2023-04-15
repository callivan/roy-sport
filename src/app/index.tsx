import React from 'react';

import { Popup, TPopupItem } from '@entities';
import { ThemeProvider } from '@shared';

export function App() {
  const popupItems: TPopupItem[] = [
    { name: 'БЕГ', isActive: true },
    { name: 'ВОЛЕЙБОЛ', isActive: false },
    { name: 'БАСКЕТБОЛ', isActive: false },
  ];

  return (
    <ThemeProvider>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100vh',
          backgroundColor: 'red',
        }}
      >
        <Popup items={popupItems} />
      </div>
    </ThemeProvider>
  );
}
