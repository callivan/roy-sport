import React, { memo, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Navigation, TNavigationItem } from '@entities';

import * as S from './Desktop.styles';
import { IHeaderDesktopProps } from './types/component';

export const Desktop = memo(function Desktop({ logo }: IHeaderDesktopProps) {
  const { pathname } = useLocation();
  const { products } = useParams<{ products: string }>();

  const navigations: { categories: TNavigationItem[]; contacts: TNavigationItem[] } = useMemo(
    () => ({
      categories: [
        { name: 'БЕГ', isActive: false, link: `/run/${products || 'sneakers'}` },
        { name: 'ВОЛЕЙБОЛ', isActive: false, link: `/volleyball/${products || 'sneakers'}` },
        { name: 'БАСКЕТБОЛ', isActive: false, link: `/basketball/${products || 'sneakers'}` },
      ].map((category) => ({
        ...category,
        isActive: pathname.includes(category.link),
      })),
      contacts: [{ name: 'КОНТАКТЫ', isActive: false, link: '/contacts' }].map((contact) => ({
        ...contact,
        isActive: pathname.includes(contact.link),
      })),
    }),
    [pathname, products],
  );

  return (
    <S.Container>
      <S.Logo src={logo} alt="Логотип" />

      <S.NavCenter>
        <Navigation items={navigations.categories} />
      </S.NavCenter>

      <Navigation items={navigations.contacts} />
    </S.Container>
  );
});
