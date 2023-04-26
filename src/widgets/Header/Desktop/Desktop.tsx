import React, { memo } from 'react';

import { Navigation, TNavigationItem } from '@entities';

import * as S from './Desktop.styles';
import { IHeaderDesktopProps } from './types/component';

export const Desktop = memo(function Desktop({ logo }: IHeaderDesktopProps) {
  const navigationItemsCenter: TNavigationItem[] = [
    { name: 'БЕГ', isActive: true },
    { name: 'ВОЛЕЙБОЛ', isActive: false },
    { name: 'БАСКЕТБОЛ', isActive: false },
  ];

  const navigationItemsRight: TNavigationItem[] = [{ name: 'КОНТАКТЫ', isActive: false }];

  return (
    <S.Container>
      <S.Logo src={logo} alt="Логотип" />

      <S.NavCenter>
        <Navigation items={navigationItemsCenter} />
      </S.NavCenter>

      <Navigation items={navigationItemsRight} />
    </S.Container>
  );
});
