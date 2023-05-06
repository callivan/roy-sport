import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import React from 'react';

import { Drawer } from '@entities';

import * as S from './Contacts.styles';
import { IMapProps } from './types/component';

export function Contacts({ isDrawerTop }: IMapProps) {
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

      <Drawer isPositionTop={isDrawerTop}>
        <div style={{ width: '400px', height: '400px' }}></div>
      </Drawer>
    </S.Container>
  );
}
