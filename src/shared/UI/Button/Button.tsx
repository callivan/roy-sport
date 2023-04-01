import React, { useRef } from 'react';

import * as S from './Button.styles';
import { handleClick } from './handlers/click';
import { IButtonProps } from './types/component';

export function Button({ children, onClick, ...props }: IButtonProps) {
  const circleRef = useRef<HTMLDivElement | null>(null);

  return (
    <S.Button onClick={(e) => handleClick({ e, circleRef, onClick })} {...props}>
      <S.Text>{children}</S.Text>

      <S.CircleContainer ref={circleRef}>
        <S.CircleEffect />
      </S.CircleContainer>
    </S.Button>
  );
}
