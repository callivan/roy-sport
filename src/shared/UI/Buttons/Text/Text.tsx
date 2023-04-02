import React from 'react';

import * as S from './Text.styles';
import { IButtonProps } from './types/component';

export function ButtonText({ children, icon, isActive, ...props }: IButtonProps) {
  return (
    <S.Button className={isActive ? 'is-active' : ''} {...props}>
      {icon ? <S.IconContainer className="button-icon">{icon}</S.IconContainer> : null}

      <S.Text className="button-text">{children}</S.Text>

      <S.Line className="button-line" />
    </S.Button>
  );
}
