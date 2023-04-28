import React from 'react';

import { Slider } from '@entities';
import { ButtonContained, IconChevron, Text } from '@shared';
import { Header, Layout } from '@widgets';

import img from './assets/shoes.png';
import img1 from './assets/shoes1.png';
import img2 from './assets/shoes2.png';
import * as S from './Product.styles';
import { IProductProps } from './types/component';

export function Product({ isHeaderMobile, isTextMobile }: IProductProps) {
  const items = [
    { id: '1', img: img },
    { id: '2', img: img1 },
    { id: '3', img: img2 },
  ];
  return (
    <Layout header={<Header isMobile={isHeaderMobile} />}>
      <S.Container>
        <S.SliderContainer>
          <Slider items={items} />
        </S.SliderContainer>

        <S.Header>
          <ButtonContained fontVarian="roboto_body2" icon={<IconChevron />}>
            Назад
          </ButtonContained>

          <Text as="h1" variant={isTextMobile ? 'roboto_h2' : 'roboto_h1'}>
            Nike Air
          </Text>
        </S.Header>

        <S.Footer>
          <S.Info>
            <Text variant={isTextMobile ? 'roboto_body2' : 'roboto_body1'}>
              Размеры: 42 / 43 / 44
            </Text>
            <Text variant={isTextMobile ? 'roboto_body2' : 'roboto_body1'}>Цена: 3 000 ₽</Text>
          </S.Info>

          <ButtonContained fontVarian="roboto_body2">Узнать детали</ButtonContained>
        </S.Footer>
      </S.Container>
    </Layout>
  );
}
