import React, { memo } from 'react';

import logo from './assets/imgs/logo.png';
import { Desktop } from './Desktop';
import { Mobile } from './Mobile/Mobile';
import { IHeaderProps } from './types/component';

export const Header = memo(function Header({ isMobile = false }: IHeaderProps) {
  return <>{isMobile ? <Mobile logo={logo} /> : <Desktop logo={logo} />}</>;
});
