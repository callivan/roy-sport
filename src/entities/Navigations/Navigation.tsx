import React, { useState } from 'react';

import { ButtonIcon, ButtonText } from '@shared';

import { handleNavigationClick } from './handlers';
import * as S from './Navigation.styles';
import { TNavigationItem, TNavigationProps } from './types/component';

export function Navigation({ items, isVertical = false, isOnlyIcon = false }: TNavigationProps) {
  const [list, setList] = useState<TNavigationItem[]>(items);

  return (
    <S.List isVertical={isVertical}>
      {list.map(({ name, isActive, icon }, index) => (
        <S.Item key={index}>
          {isOnlyIcon && icon ? (
            <ButtonIcon
              isActive={isActive}
              onClick={() => {
                if (isActive) return;
                handleNavigationClick({ index, setList });
              }}
            >
              {icon}
            </ButtonIcon>
          ) : (
            <ButtonText
              isActive={isActive}
              icon={icon}
              onClick={() => {
                if (isActive) return;
                handleNavigationClick({ index, setList });
              }}
            >
              {name}
            </ButtonText>
          )}
        </S.Item>
      ))}
    </S.List>
  );
}
