import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Bage, ButtonIcon, ButtonText } from '@shared';

import * as S from './Navigation.styles';
import { TNavigationProps } from './types/component';

export function Navigation({
  items,
  isBage = false,
  isVertical = false,
  isOnlyIcon = false,
}: TNavigationProps) {
  const navigate = useNavigate();

  return (
    <S.List className={isVertical ? 'is-vertical' : ''}>
      {items.map(({ name, isActive, count, link, icon }, index) => (
        <S.Item key={index}>
          {isOnlyIcon && icon ? (
            <ButtonIcon
              isActive={isActive}
              onClick={() => {
                if (isActive) return;
                navigate(link);
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
                navigate(link);
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
