import { animated } from '@react-spring/web';
import React, { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Bage, ButtonIcon, ButtonText } from '@shared';

import { useHorizontalAnimation, useVerticalAnimation } from './animations';
import * as S from './Navigation.styles';
import { TNavigationProps } from './types/component';

export function Navigation({
  items,
  isBage = false,
  isVertical = false,
  isOnlyIcon = false,
}: TNavigationProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const horizontalAnimation = useHorizontalAnimation({ count: items.length });
  const verticalAnimation = useVerticalAnimation({ count: items.length });

  const animation = isVertical ? verticalAnimation : horizontalAnimation;

  useLayoutEffect(() => {
    if (
      /^\/(contacts)?|(run|volleyball|basketball)\/(sneakers|cloth|special)(\/)?/gi.test(pathname)
    ) {
      setTimeout(() => animation.start(), 600);
    }
  }, [pathname, isVertical]);

  return (
    <S.List className={isVertical ? 'is-vertical' : ''}>
      {animation.trails.map((style, index) => {
        const { icon, isActive, name, count, link } = items[index];

        return (
          <animated.li
            key={index}
            style={{
              ...style,

              flexGrow: 0,

              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
            }}
          >
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
          </animated.li>
        );
      })}
    </S.List>
  );
}
