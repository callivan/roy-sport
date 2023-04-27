import React, { memo } from 'react';

import { ProductsList } from '@entities';
import { Scroll } from '@shared';
import { Header, Layout, Sidebar } from '@widgets';

import * as S from './Products.styles';
import { IProductsProps } from './types/component';

export const Products = memo(function Products({
  isHeaderMobile,
  isSidebarMobile,
  isSidebarOnlyIcon,
  isSidebarVertical,
}: IProductsProps) {
  return (
    <Layout header={<Header isMobile={isHeaderMobile} />}>
      <S.Container isHorizontal={isSidebarMobile}>
        <S.SidebarWrapper isHorizontal={isSidebarMobile}>
          <Sidebar isOnlyIcon={isSidebarOnlyIcon} isVertical={isSidebarVertical} />
        </S.SidebarWrapper>

        <S.Content>
          <Scroll>
            <ProductsList />
          </Scroll>
        </S.Content>
      </S.Container>
    </Layout>
  );
});
