import React, { memo } from 'react';

import * as S from './Card.styles';
import { ICardProps } from './types/component';
import { arePropsEqual } from './utils/arePropsEqual';

export const Card = memo(function Card({ name, price, img, currency = 'RUB' }: ICardProps) {
  const formatter = new Intl.NumberFormat('ru', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  return (
    <S.Wrapper>
      <S.Blur />

      <S.Container className="card-container">
        <S.Img src={img} />

        <S.Footer className="card-footer">
          <S.Text>{name}</S.Text>

          <S.Text>{formatter.format(price)}</S.Text>
        </S.Footer>
      </S.Container>
    </S.Wrapper>
  );
}, arePropsEqual);
