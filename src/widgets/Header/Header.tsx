import { animated } from '@react-spring/web';
import React, { memo, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useContainerAnimation } from './animations';
import logo from './assets/imgs/logo.png';
import { Desktop } from './Desktop';
import { Mobile } from './Mobile/Mobile';
import { IHeaderProps } from './types/component';

export const Header = memo(function Header({ isMobile = false }: IHeaderProps) {
  const { pathname } = useLocation();

  const animation = useContainerAnimation();

  useLayoutEffect(() => {
    if (
      /^\/(contacts)?|(run|volleyball|basketball)\/(sneakers|cloth|special)(\/)?/gi.test(pathname)
    ) {
      animation.start();
    }
  }, [pathname]);

  return (
    <animated.div style={animation.styles}>
      {isMobile ? <Mobile logo={logo} /> : <Desktop logo={logo} />}
    </animated.div>
  );
});
