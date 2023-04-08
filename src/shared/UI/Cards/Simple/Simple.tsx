import React from 'react';

import img from '../assets/Shoes.png';
import * as S from './Simple.styles';

export function CardSimple() {
  return (
    <S.Wrapper>
      <S.Blur />

      <S.Container className="card-container">
        <S.Img src={img} />

        <S.Footer className="card-footer">
          <S.Text>Nike Aird</S.Text>

          <S.Text>3 000 ₽</S.Text>
        </S.Footer>
      </S.Container>
    </S.Wrapper>
  );
}
