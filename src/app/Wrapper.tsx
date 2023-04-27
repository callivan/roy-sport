import React from 'react';

import { Products } from '@pages';

import { useMediaContext } from './contexts';

export function Wrapper() {
  const media = useMediaContext();
  return (
    <Products
      isHeaderMobile={media.isTableSmall || media.isMobileBig || media.isMobileSmall}
      isSidebarMobile={media.isMobileBig || media.isMobileSmall}
      isSidebarOnlyIcon={
        media.isTabletBig || media.isTableSmall || media.isMobileBig || media.isMobileSmall
      }
      isSidebarVertical={media.isDesktop || media.isTabletBig || media.isTableSmall}
    />
  );
}
