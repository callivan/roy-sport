import React, { useState } from 'react';

import { Bage, ButtonIcon, ButtonText } from '@shared';

import { handleNavigationClick } from './handlers';
import * as S from './Navigation.styles';
import { TNavigationItem, TNavigationProps } from './types/component';

export function Navigation({
  items,
  isBage = false,
  isVertical = false,
  isOnlyIcon = false,
}: TNavigationProps) {
  const [list, setList] = useState<TNavigationItem[]>(items);

  return (
    <S.List isVertical={isVertical}>
      {list.map(({ name, isActive, icon, count }, index) => (
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

          {isBage && count ? <Bage text={`${count}`} isActive={isActive} /> : null}
        </S.Item>
      ))}
    </S.List>
  );
}
