import React, { memo, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Navigation, TNavigationItem } from '@entities';
import { IconBarbell, IconHoodie, IconSneaker } from '@shared';

import * as S from './Sidebar.styles';
import { TSidebarProps } from './types/component';

export const Sidebar = memo(function Sidebar({
  isOnlyIcon = false,
  isVertical = true,
}: TSidebarProps) {
  const { pathname } = useLocation();
  const { categoryName } = useParams<{ categoryName: string }>();

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

  return (
    <S.Container className={isVertical ? 'is-vertical' : ''}>
      <Navigation items={navigations} isVertical={isVertical} isOnlyIcon={isOnlyIcon} isBage />
    </S.Container>
  );
});
