import React from 'react';

import { IconInstagram, IconVK, Text } from '@shared';

import * as S from './Social.styles';

export function Social() {
  return (
    <S.Container>
      <Text as="h2" variant="roboto_h2" color="white">
        Социальные сети:
      </Text>

      <S.Links>
        <S.Link>
          <IconInstagram />
          <Text
            as="a"
            href="https://instagram.com"
            target="_blank"
            variant="roboto_body2"
            color="gray_medium"
          >
            https://instagram.com
          </Text>
        </S.Link>

        <S.Link>
          <IconVK />
          <Text
            as="a"
            href="https://vk.com"
            target="_blank"
            variant="roboto_body2"
            color="gray_medium"
          >
            https://vk.com
          </Text>
        </S.Link>
      </S.Links>
    </S.Container>
  );
}
