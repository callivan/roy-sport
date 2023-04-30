import React from 'react';

import { IconPhone, Text } from '@shared';

import * as S from './Phone.styles';

export function Phone() {
  return (
    <S.Container>
      <Text as="h2" variant="roboto_h2" color="white">
        Телефон:
      </Text>

      <S.Phones>
        <S.Phone>
          <IconPhone />
          <Text
            as="a"
            href="tel:79231221212"
            target="_blank"
            variant="roboto_body2"
            color="gray_medium"
          >
            +7 923 122 - 1212
          </Text>
        </S.Phone>
      </S.Phones>
    </S.Container>
  );
}
