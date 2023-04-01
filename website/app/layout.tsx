import './globals.css';

import { Aside, Header } from '@widgets';
import classNames from 'classnames';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body
        className={classNames(
          // Position
          'relative',

          // Grid
          'grid grid-cols-rootLayout grid-rows-rootLayout',

          // Size
          'w-screen h-screen',

          // Font
          'font-sans',

          // Color
          'bg-white-900 text-black-900',

          // Layer
          'isolate',
        )}
      >
        <Header
          className={classNames(
            // Grid
            'col-span-full row-start-1 row-end-2',
          )}
        />

        <Aside
          className={classNames(
            // Grid
            'col-span-1 row-span-2',
            // Mobile big
            's:col-span-full s:row-span-1',
          )}
        />
        {children}
      </body>
    </html>
  );
}
