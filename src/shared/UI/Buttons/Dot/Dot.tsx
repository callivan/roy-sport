import React from 'react';

import * as S from './Dot.styles';
import { TDotProps } from './types/component';

export function Dot({ isActive, children, ...props }: TDotProps) {
  return (
    <S.Wrapper>
      <S.Blur />

      <S.Button className={isActive ? 'is-active' : ''} {...props}>
        {children}
      </S.Button>
    </S.Wrapper>
  );
}
