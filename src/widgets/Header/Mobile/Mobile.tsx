import React, { memo, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Popup, TPopupItem } from '@entities';

import * as S from './Mobile.styles';
import { IHeaderMobileProps } from './types/component';

export const Mobile = memo(function Mobile({ logo }: IHeaderMobileProps) {
  const { pathname } = useLocation();
  const { products } = useParams<{ products: string }>();

  const navigations: TPopupItem[] = useMemo(
    () =>
      [
        { name: 'БЕГ', isActive: false, link: `/run/${products || 'sneakers'}` },
        { name: 'ВОЛЕЙБОЛ', isActive: false, link: `/volleyball/${products || 'sneakers'}` },
        { name: 'БАСКЕТБОЛ', isActive: false, link: `/basketball/${products || 'sneakers'}` },
        { name: 'КОНТАКТЫ', isActive: false, link: '/contacts' },
      ].map((item) => ({
        ...item,
        isActive: pathname.includes(item.link),
      })),
    [pathname],
  );

  return (
    <S.Container>
      <S.Logo src={logo} alt="Логотип" />

      <Popup items={navigations} />
    </S.Container>
  );
});
