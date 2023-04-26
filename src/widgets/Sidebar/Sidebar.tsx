import React, { memo } from 'react';

import { Navigation, TNavigationItem } from '@entities';
import { IconBarbell, IconHoodie, IconSneaker } from '@shared';

import * as S from './Sidebar.styles';
import { TSidebarProps } from './types/component';

export const Sidebar = memo(function Sidebar({
  isOnlyIcon = false,
  isVertical = true,
}: TSidebarProps) {
  const navigationItems: TNavigationItem[] = [
    { name: 'КРОССОВКИ', isActive: true, icon: <IconSneaker />, count: 10 },
    { name: 'ОДЕЖДА', isActive: false, icon: <IconHoodie />, count: 24 },
    { name: 'СПЕЦТОВАРЫ', isActive: false, icon: <IconBarbell />, count: 12 },
  ];

  return (
    <S.Container isVertical={isVertical}>
      <Navigation items={navigationItems} isVertical={isVertical} isOnlyIcon={isOnlyIcon} isBage />
    </S.Container>
  );
});
