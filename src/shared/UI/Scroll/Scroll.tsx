import React from 'react';

import * as S from './Scroll.styles';
import { IScrollProps } from './types/component';

export function Scroll({ children }: IScrollProps) {
  return <S.Content>{children}</S.Content>;
}
