import React from 'react';

import { Text } from '@shared';

import * as S from './Chart.styles';

export function Chart() {
  return (
    <S.Chart>
      <Text as="h2" variant="roboto_h2" color="white">
        График работы:
      </Text>

      <S.Times>
        <Text color="gray_medium">Пн: 10:00 - 18:00</Text>
        <Text color="gray_medium">Вт: 10:00 - 18:00</Text>
        <Text color="gray_medium">Ср: 10:00 - 18:00</Text>
        <Text color="gray_medium">Чт: 10:00 - 18:00</Text>
        <Text color="gray_medium">Пт: 10:00 - 18:00</Text>
        <Text color="gray_medium">Сб: 10:00 - 18:00</Text>
        <Text color="gray_medium">Вс: 10:00 - 18:00</Text>
      </S.Times>
    </S.Chart>
  );
}
