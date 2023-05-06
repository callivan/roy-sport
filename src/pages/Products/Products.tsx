import { animated } from '@react-spring/web';
import React, { memo, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ButtonContained, Scroll, theme } from '@shared';
import { ProductsList, Sidebar } from '@widgets';

import { useFilterAnimation } from './animations';
import * as S from './Products.styles';
import { EFilters, IProductsProps } from './types/component';

export const Products = memo(function Products({
  isSidebarMobile,
  isSidebarOnlyIcon,
  isSidebarVertical,
}: IProductsProps) {
  const { pathname } = useLocation();
  const [activeFilter, setActiveFilter] = useState<EFilters>(EFilters.ASC);

  const animation = useFilterAnimation();

  const name = 'is-horizontal';

  useLayoutEffect(() => {
    if (/^\/(run|volleyball|basketball)\/(sneakers|cloth|special)$/gi.test(pathname)) {
      setTimeout(() => animation.start(), 600);
    }
  }, [pathname]);

  return (
    <S.Container className={isSidebarMobile ? name : ''}>
      <S.SidebarWrapper className={isSidebarMobile ? name : ''}>
        <Sidebar isOnlyIcon={isSidebarOnlyIcon} isVertical={isSidebarVertical} />
      </S.SidebarWrapper>

      <S.Content>
        <S.FiltersContainer className={!isSidebarMobile ? name : ''}>
          <animated.div style={animation.styles}>
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
          </animated.div>

          <animated.div style={animation.styles}>
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
          </animated.div>
        </S.FiltersContainer>

        <Scroll>
          <ProductsList />
        </Scroll>
      </S.Content>
    </S.Container>
  );
});
