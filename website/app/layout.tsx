import './globals.css';

import { Loader } from '@entities';
import { Header } from '@widgets';
import classNames from 'classnames';
import { SkeletonTheme } from 'react-loading-skeleton';

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
        <>
          <Header
            className={classNames(
              // Grid
              'col-span-full row-start-1 row-end-2',
            )}
          />

          <SkeletonTheme baseColor="#E1E3E670" highlightColor="#E1E3E6">
            {children}
          </SkeletonTheme>
        </>

        <Loader />
      </body>
    </html>
  );
}
