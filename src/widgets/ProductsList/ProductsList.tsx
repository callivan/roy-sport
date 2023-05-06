import { animated } from '@react-spring/web';
import React, { memo, useLayoutEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Card, ICardProps } from '@entities';

import { useShowAnimation } from './animations';
import shoes from './assets/shoes.png';
import shoes1 from './assets/shoes1.png';
import shoes2 from './assets/shoes2.png';
import * as S from './ProductsList.styles';

export const ProductsList = memo(function ProductsList() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { categoryName, products } = useParams<{ categoryName: string; products: string }>();

  const animation = useShowAnimation({ count: 12 });

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
    {
      name: 'Nike Air',
      price: 3500,
      img: shoes,
      id: '10',
    },
    {
      name: 'Nike Air',
      price: 3500,
      img: shoes1,
      id: '11',
    },
    {
      name: 'Nike Air',
      price: 3500,
      img: shoes2,
      id: '12',
    },
  ];

  useLayoutEffect(() => {
    if (/^\/(run|volleyball|basketball)\/(sneakers|cloth|special)$/gi.test(pathname)) {
      setTimeout(() => animation.start(), 600);
    }
  }, [pathname]);

  return (
    <S.List>
      {animation.trails.map((styles, index) => {
        const item = items[index];

        return (
          <animated.li key={item.id} style={{ ...styles, gridColumn: 'span 1' }}>
            <button onClick={() => navigate(`/${categoryName}/${products}/${item.id}`)}>
              <Card {...item} />
            </button>
          </animated.li>
        );
      })}
    </S.List>
  );
});
