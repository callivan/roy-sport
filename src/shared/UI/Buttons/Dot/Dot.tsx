import React from 'react';

import * as S from './Dot.styles';
import { TDotProps } from './types/component';

export function Dot({ isActive, ...props }: TDotProps) {
  return (
    <S.Wrapper>
      <S.Blur />

      <S.Button className={isActive ? 'is-active' : ''} {...props} />
    </S.Wrapper>
  );
}
