import { animated } from '@react-spring/web';
import React, { memo, useLayoutEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Navigation, TNavigationItem } from '@entities';
import { IconBarbell, IconHoodie, IconSneaker } from '@shared';

import { useHorizontalAnimation, useVerticalAnimation } from './animations';
import * as S from './Sidebar.styles';
import { ISidebarProps } from './types/component';

export const Sidebar = memo(function Sidebar({
  isOnlyIcon = false,
  isVertical = true,
}: ISidebarProps) {
  const { pathname } = useLocation();
  const { categoryName } = useParams<{ categoryName: string }>();

  const verticalAnimation = useVerticalAnimation();
  const horizontalAnimation = useHorizontalAnimation();

  const animation = isVertical ? verticalAnimation : horizontalAnimation;

  const navigations: TNavigationItem[] = useMemo(
    () =>
      [
        {
          name: 'КРОССОВКИ',
          isActive: false,
          icon: <IconSneaker />,
          link: `/${categoryName || 'run'}/sneakers`,
          count: 10,
        },
        {
          name: 'ОДЕЖДА',
          isActive: false,
          icon: <IconHoodie />,
          link: `/${categoryName || 'run'}/cloth`,
          count: 24,
        },
        {
          name: 'СПЕЦТОВАРЫ',
          isActive: false,
          icon: <IconBarbell />,
          link: `/${categoryName || 'run'}/special`,
          count: 12,
        },
      ].map((item) => ({
        ...item,
        isActive: pathname.includes(item.link.replace(/^\/\d\//gi, '')),
      })),
    [pathname, categoryName],
  );

  useLayoutEffect(() => {
    if (/^\/(run|volleyball|basketball)\/(sneakers|cloth|special)$/gi.test(pathname)) {
      animation.start();
    }
  }, [pathname, isVertical]);

  return (
    <animated.div style={{ ...animation.styles, width: '100%', height: '100%' }}>
      <S.Container className={isVertical ? 'is-vertical' : ''}>
        <Navigation items={navigations} isVertical={isVertical} isOnlyIcon={isOnlyIcon} isBage />
      </S.Container>
    </animated.div>
  );
});
