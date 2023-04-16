import React, { createContext, useContext } from 'react';

import { useMatchMedia } from '@shared';

import { IMediaContextProvidedProps, TMediaContextProps } from './types';

const MediaContext = createContext<TMediaContextProps>({} as TMediaContextProps);

export const MediaContextProvider = ({ children }: IMediaContextProvidedProps) => {
  const result = useMatchMedia({
    sizeNames: ['isDesktop', 'isTabletBig', 'isTableSmall', 'isMobileBig', 'isMobileSmall'],
    queries: [
      '(min-width: 1025px)',
      '(max-width: 1024px) and (min-width: 745px)',
      '(max-width: 744px) and (min-width: 596px)',
      '(max-width: 595px) and (min-width: 390px)',
      '(max-width: 390px)',
    ],
  });

  return (
    <MediaContext.Provider value={result as TMediaContextProps}>{children}</MediaContext.Provider>
  );
};

export const useMediaContext = () => useContext(MediaContext);
