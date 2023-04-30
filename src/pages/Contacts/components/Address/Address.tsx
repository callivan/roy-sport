import React from 'react';

import { IconMarker, Text } from '@shared';

import * as S from './Address.styles';

export function Address() {
  return (
    <S.Container>
      <Text as="h2" variant="roboto_h2" color="white">
        Адрес:
      </Text>

      <S.Addresses>
        <S.Address>
          <IconMarker />
          <Text variant="roboto_body2" color="gray_medium">
            Новосибирск, ул. Пермитина, д. 24
          </Text>
        </S.Address>
      </S.Addresses>
    </S.Container>
  );
}
