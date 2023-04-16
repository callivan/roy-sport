import React from 'react';

import { ProductsList } from '@entities';
import { Header, Layout, Sidebar } from '@widgets';

import * as S from './Products.styles';
import { IProductsProps } from './types/component';

export function Products({ isTabletSmall, isMobile }: IProductsProps) {
  return (
    <Layout header={<Header isMobile={isMobile} />}>
      <S.Container isHorizontal={isMobile}>
        <S.SidebarWrapper isHorizontal={isMobile}>
          <Sidebar isOnlyIcon={isTabletSmall || isMobile} isVertical={!isMobile} />
        </S.SidebarWrapper>

        <S.Content>
          <ProductsList />
        </S.Content>
      </S.Container>
    </Layout>
  );
}
