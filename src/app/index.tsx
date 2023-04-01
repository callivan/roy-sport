import React from 'react';

import { Button, ThemeProvider, useHintContext } from '@shared';

export function App() {
  const { addHint } = useHintContext();

  const handleAddHint = () => {
    addHint({ hint: <div>HINT</div> });
  };

  return (
    <ThemeProvider>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100vh',
        }}
      >
        <Button onClick={handleAddHint}>Add hint</Button>
      </div>
    </ThemeProvider>
  );
}
