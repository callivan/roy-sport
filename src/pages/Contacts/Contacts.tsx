import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import React from 'react';

import { Drawer } from '@shared';

import { Address } from './components/Address';
import { Chart } from './components/Chart';
import { Phone } from './components/Phone';
import { Social } from './components/Social';
import * as S from './Contacts.styles';
import { IMapProps } from './types/component';

export function Contacts({ isHeaderMobile }: IMapProps) {
  return (
    <S.Container>
      <YMaps>
        <Map
          defaultState={{ center: [54.99179, 82.893633], zoom: 17 }}
          width={'100%'}
          height={'100%'}
        >
          <Placemark geometry={[54.99179, 82.893633]} />
        </Map>
      </YMaps>

      <Drawer isTop={isHeaderMobile} top={isHeaderMobile ? 88 : 40}>
        <S.Contacts>
          <Chart />
          <Social />
          <Phone />
          <Address />
        </S.Contacts>
      </Drawer>
    </S.Container>
  );
}
