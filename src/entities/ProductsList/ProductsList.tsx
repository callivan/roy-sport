import React, { memo } from 'react';

import { Card, ICardProps } from '@shared';

import shoes from './assets/imgs/shoes.png';
import * as S from './ProductsList.styles';

export const ProductsList = memo(function ProductsList() {
  const items: ICardProps[] = [
    {
      name: 'Nike Air',
      price: 3500,
      img: shoes,
    },
    { name: 'Nike Air', price: 3500, img: shoes },
    { name: 'Nike Air', price: 3500, img: shoes },
    { name: 'Nike Air', price: 3500, img: shoes },
    { name: 'Nike Air', price: 3500, img: shoes },
    { name: 'Nike Air', price: 3500, img: shoes },
    { name: 'Nike Air', price: 3500, img: shoes },
    { name: 'Nike Air', price: 3500, img: shoes },
    { name: 'Nike Air', price: 3500, img: shoes },
    { name: 'Nike Air', price: 3500, img: shoes },
    { name: 'Nike Air', price: 3500, img: shoes },
    { name: 'Nike Air', price: 3500, img: shoes },
    { name: 'Nike Air', price: 3500, img: shoes },
    { name: 'Nike Air', price: 3500, img: shoes },
    { name: 'Nike Air', price: 3500, img: shoes },
    { name: 'Nike Air', price: 3500, img: shoes },
  ];

  return (
    <S.List>
      {items.map((item, index) => (
        <S.Item key={index}>
          <Card {...item} />
        </S.Item>
      ))}
    </S.List>
  );
});
