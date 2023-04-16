import React from 'react';

import { Card } from '@shared';

import shoes from './assets/imgs/shoes.png';
import * as S from './ProductsList.styles';
import { TProductItemProps } from './types/component';

export function ProductsList() {
  const items: TProductItemProps[] = [
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
}
