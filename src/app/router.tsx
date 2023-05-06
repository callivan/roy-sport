import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Contacts, Product, Products } from '@pages';
import { Header, Layout } from '@widgets';

import { useMediaContext } from './contexts';

export const router = () => {
  const { isDesktop, isTabletBig, isTableSmall, isMobileBig, isMobileSmall } = useMediaContext();

  return createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout header={<Header isMobile={isTableSmall || isMobileBig || isMobileSmall} />} />
      ),
      children: [
        {
          path: '/:categoryName/:products',
          element: (
            <Products
              isSidebarMobile={isMobileBig || isMobileSmall}
              isSidebarOnlyIcon={isTabletBig || isTableSmall || isMobileBig || isMobileSmall}
              isSidebarVertical={isDesktop || isTabletBig || isTableSmall}
            />
          ),
        },
        {
          path: '/:categoryName/:products/:productId',
          element: <Product isTextMobile={isMobileBig || isMobileSmall} />,
        },
        {
          path: '/contacts',
          element: <Contacts isDrawerTop={isTableSmall || isMobileBig || isMobileSmall} />,
        },
      ],
    },
  ]);
};
