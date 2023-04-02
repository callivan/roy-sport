import React from 'react';

import * as S from './Bage.styles';
import { IBageProps } from './types/components';

export function Bage({ text, isActive, ...props }: IBageProps) {
  return (
    <S.Container className={isActive ? 'is-active' : ''} {...props}>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}