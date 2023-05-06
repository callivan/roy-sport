import { animated } from '@react-spring/web';
import React, { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Slider } from '@entities';
import { ButtonContained, IconChevron, Text } from '@shared';

import { useLeftAnimation, useRightAnimation } from './animations';
import img from './assets/shoes.png';
import img1 from './assets/shoes1.png';
import img2 from './assets/shoes2.png';
import * as S from './Product.styles';
import { IProductProps } from './types/component';

export function Product({ isTextMobile }: IProductProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const rightAnimation = useRightAnimation();
  const leftAnimation = useLeftAnimation();

  const items = [
    { id: '1', img: img },
    { id: '2', img: img1 },
    { id: '3', img: img2 },
  ];

  useLayoutEffect(() => {
    if (/^\/(run|volleyball|basketball)\/(sneakers|cloth|special)\//gi.test(pathname)) {
      setTimeout(() => {
        rightAnimation.start();
        leftAnimation.start();
      }, 600);
    }
  }, [pathname]);

  return (
    <S.Container>
      <S.SliderContainer>
        <Slider items={items} />
      </S.SliderContainer>

      <animated.div style={leftAnimation.styles}>
        <S.Header>
          <ButtonContained
            fontVarian="roboto_body2"
            icon={<IconChevron />}
            onClick={() => navigate(-1)}
          >
            Назад
          </ButtonContained>

          <Text as="h1" variant={isTextMobile ? 'roboto_h2' : 'roboto_h1'}>
            Nike Air
          </Text>
        </S.Header>
      </animated.div>

      <S.Footer>
        <animated.div style={leftAnimation.styles}>
          <S.Info>
            <Text variant={isTextMobile ? 'roboto_body2' : 'roboto_body1'}>
              Размеры: 42 / 43 / 44
            </Text>
            <Text variant={isTextMobile ? 'roboto_body2' : 'roboto_body1'}>Цена: 3 000 ₽</Text>
          </S.Info>
        </animated.div>

        <animated.div style={rightAnimation.styles}>
          <ButtonContained fontVarian="roboto_body2">Узнать детали</ButtonContained>
        </animated.div>
      </S.Footer>
    </S.Container>
  );
}
