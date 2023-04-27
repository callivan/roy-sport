import React from 'react';

import { Products } from '@pages';

import { useMediaContext } from './contexts';

export function Wrapper() {
  const media = useMediaContext();
  return (
    <Products
      isTabletSmall={media.isTableSmall}
      isMobile={media.isMobileBig || media.isMobileSmall || media.isTableSmall}
    />
  );
}
