import React from 'react';

import * as S from './Scroll.styles';
import { IScrollProps } from './types/component';

export function Scroll({ children, off = false }: IScrollProps) {
  return <S.Content className={off ? 'is-off' : ''}>{children}</S.Content>;
}
