import React from 'react';

import * as S from './Icon.styles';
import { IButtonProps } from './types/component';

export function ButtonIcon({ children, isActive, ...props }: IButtonProps) {
  return (
    <S.Button className={isActive ? 'is-active' : ''} {...props}>
      {children}
      <S.Line className="button-line" />
    </S.Button>
  );
}
