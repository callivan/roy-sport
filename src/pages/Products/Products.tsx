import React, { memo, useState } from 'react';

import { ProductsList } from '@entities';
import { ButtonContained, Scroll, theme } from '@shared';
import { Sidebar } from '@widgets';

import * as S from './Products.styles';
import { EFilters, IProductsProps } from './types/component';

export const Products = memo(function Products({
  isSidebarMobile,
  isSidebarOnlyIcon,
  isSidebarVertical,
}: IProductsProps) {
  const [activeFilter, setActiveFilter] = useState<EFilters>(EFilters.ASC);

  const name = 'is-horizontal';

  return (
    <S.Container className={isSidebarMobile ? name : ''}>
      <S.SidebarWrapper className={isSidebarMobile ? name : ''}>
        <Sidebar isOnlyIcon={isSidebarOnlyIcon} isVertical={isSidebarVertical} />
      </S.SidebarWrapper>

      <S.Content>
        <S.FiltersContainer className={!isSidebarMobile ? name : ''}>
          <ButtonContained
            fontVarian="roboto_body2"
            isActive={activeFilter === EFilters.ASC}
            style={{
              backgroundColor:
                theme.colors[activeFilter === EFilters.ASC ? 'black_dark' : 'gray_medium'],
              color: theme.colors[activeFilter === EFilters.ASC ? 'white' : 'gray_dark'],
            }}
            onClick={() => setActiveFilter(EFilters.ASC)}
          >
            По возрастанию цены
          </ButtonContained>
          <ButtonContained
            fontVarian="roboto_body2"
            isActive={activeFilter === EFilters.DESC}
            style={{
              backgroundColor:
                theme.colors[activeFilter === EFilters.DESC ? 'black_dark' : 'gray_medium'],
              color: theme.colors[activeFilter === EFilters.DESC ? 'white' : 'gray_dark'],
            }}
            onClick={() => setActiveFilter(EFilters.DESC)}
          >
            По убыванию цены
          </ButtonContained>
        </S.FiltersContainer>

        <Scroll>
          <ProductsList />
        </Scroll>
      </S.Content>
    </S.Container>
  );
});
