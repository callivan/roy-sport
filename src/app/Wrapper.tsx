import React from 'react';

import { Products } from '@pages';

import { useMediaContext } from './contexts';

export function Wrapper() {
  const { isTableSmall, isMobileBig, isMobileSmall } = useMediaContext();
  return <Products isTabletSmall={isTableSmall} isMobile={isMobileBig || isMobileSmall} />;
}
