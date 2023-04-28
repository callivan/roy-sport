import React from 'react';

import { Product } from '@pages';

import { useMediaContext } from './contexts';

export function Wrapper() {
  const media = useMediaContext();
  return (
    <Product
      isHeaderMobile={media.isMobileBig || media.isMobileSmall || media.isTableSmall}
      isTextMobile={media.isMobileBig || media.isMobileSmall}
    />
  );
}
