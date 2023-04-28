import React from 'react';

import * as S from './Layout.styles';
import { ILayoutProps } from './types/component';

export function Layout({ header, children }: ILayoutProps) {
  return (
    <S.Container>
      <S.Header>{header}</S.Header>

      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
