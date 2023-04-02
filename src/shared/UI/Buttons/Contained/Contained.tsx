import React, { useRef } from 'react';

import * as S from './Contained.styles';
import { handleClick } from './handlers/click';
import { IButtonProps } from './types/component';

export function ButtonContained({ children, icon, onClick, ...props }: IButtonProps) {
  const circleRef = useRef<HTMLDivElement | null>(null);

  return (
    <S.Wrapper>
      <S.Blur />

      <S.Button isIcon={!!icon} onClick={(e) => handleClick({ e, circleRef, onClick })} {...props}>
        {icon ? <S.IconContainer className="button-icon">{icon}</S.IconContainer> : null}

        <S.Text className="button-text">{children}</S.Text>

        <S.CircleContainer ref={circleRef}>
          <S.CircleEffect />
        </S.CircleContainer>
      </S.Button>
    </S.Wrapper>
  );
}