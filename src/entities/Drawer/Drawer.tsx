import { animated } from '@react-spring/web';
import React, { useState } from 'react';

import { IconChevron, Portal, Scroll } from '@shared';

import { useButtonAnimation } from './animations';
import { useContentAnimation } from './animations/content';
import * as S from './Drawer.styles';
import { IDrawerProps } from './types/component';

export function Drawer({ children, isPositionTop = false }: IDrawerProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const isTopClass = isPositionTop ? 'is-top' : '';
  const isActiveClass = isOpen ? 'is-active' : '';

  const buttonAnimation = useButtonAnimation();
  const contentAnimation = useContentAnimation();

  const handleClickOpen = () => {
    setOpen((prev) => !prev);
    isOpen ? buttonAnimation.reverse() : buttonAnimation.start();
    isOpen ? contentAnimation.reverse() : contentAnimation.start();
  };

  return (
    <Portal id="drawer">
      <S.Wrapper>
        <S.Container className={[isTopClass, isActiveClass].join(' ')}>
          <S.Content className={isTopClass}>
            <Scroll off={!isOpen}>
              <animated.div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  width: isPositionTop
                    ? '100%'
                    : contentAnimation.styles.size.to((size) => `${size}vw`),
                  height: isPositionTop
                    ? contentAnimation.styles.size.to((size) => `${size}vh`)
                    : '100%',
                }}
              >
                {children}
              </animated.div>
            </Scroll>
          </S.Content>

          <S.Button className={[isTopClass, isActiveClass].join(' ')} onClick={handleClickOpen}>
            <animated.div style={buttonAnimation.styles}>
              <IconChevron width={32} height={32} color="white" />
            </animated.div>
          </S.Button>
        </S.Container>
      </S.Wrapper>
    </Portal>
  );
}
