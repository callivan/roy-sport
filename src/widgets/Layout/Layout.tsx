import React from 'react';

import * as S from './Layout.styles';
import { ILayoutProps } from './types/component';

export function Layout({ header, children }: ILayoutProps) {
  return (
    <S.Container>
      {header}

      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
