import React, { memo } from 'react';

import { Popup, TPopupItem } from '@entities';

import * as S from './Mobile.styles';
import { IHeaderMobileProps } from './types/component';

export const Mobile = memo(function Mobile({ logo }: IHeaderMobileProps) {
  const popupItems: TPopupItem[] = [
    { name: 'БЕГ', isActive: true },
    { name: 'ВОЛЕЙБОЛ', isActive: false },
    { name: 'БАСКЕТБОЛ', isActive: false },
    { name: 'КОНТАКТЫ', isActive: false },
  ];

  return (
    <S.Container>
      <S.Logo src={logo} alt="Логотип" />

      <Popup items={popupItems} />
    </S.Container>
  );
});
