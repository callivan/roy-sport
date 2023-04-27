import React, { memo } from 'react';

import { ProductsList } from '@entities';
import { Scroll } from '@shared';
import { Header, Layout, Sidebar } from '@widgets';

import * as S from './Products.styles';
import { IProductsProps } from './types/component';

export const Products = memo(function Products({ isTabletSmall, isMobile }: IProductsProps) {
  return (
    <Layout header={<Header isMobile={isMobile} />}>
      <S.Container isHorizontal={isMobile}>
        <S.SidebarWrapper isHorizontal={isMobile}>
          <Sidebar isOnlyIcon={isTabletSmall || isMobile} isVertical={!isMobile} />
        </S.SidebarWrapper>

        <Scroll>
          <S.Content>
            <ProductsList />
          </S.Content>
        </Scroll>
      </S.Container>
    </Layout>
  );
});
