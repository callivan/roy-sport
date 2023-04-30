import React, { memo } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import { Card, ICardProps } from '@shared';

import shoes from './assets/shoes.png';
import shoes1 from './assets/shoes1.png';
import shoes2 from './assets/shoes2.png';
import * as S from './ProductsList.styles';

export const ProductsList = memo(function ProductsList() {
  const { pathname } = useLocation();
  const { categoryName, products } = useParams<{ categoryName: string; products: string }>();

  const items: ICardProps[] = [
    {
      name: 'Nike Air',
      price: 3500,
      img: shoes,
      id: '1',
    },
    {
      name: 'Nike Air',
      price: 3500,
      img: shoes1,
      id: '2',
    },
    {
      name: 'Nike Air',
      price: 3500,
      img: shoes2,
      id: '3',
    },
    {
      name: 'Nike Air',
      price: 3500,
      img: shoes,
      id: '4',
    },
    {
      name: 'Nike Air',
      price: 3500,
      img: shoes1,
      id: '5',
    },
    {
      name: 'Nike Air',
      price: 3500,
      img: shoes2,
      id: '6',
    },
    {
      name: 'Nike Air',
      price: 3500,
      img: shoes,
      id: '7',
    },
    {
      name: 'Nike Air',
      price: 3500,
      img: shoes1,
      id: '8',
    },
    {
      name: 'Nike Air',
      price: 3500,
      img: shoes2,
      id: '9',
    },
  ];

  return (
    <S.List>
      {items.map((item) => (
        <S.Item key={item.id}>
          <Link to={`/${categoryName}/${products}/${item.id}`}>
            <Card {...item} />
          </Link>
        </S.Item>
      ))}
    </S.List>
  );
});
