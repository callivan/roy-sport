import { animated } from '@react-spring/web';
import React, { memo, useLayoutEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Popup, TPopupItem } from '@entities';

import { useMobileAnimation } from '../animations';
import * as S from './Mobile.styles';
import { IHeaderMobileProps } from './types/component';

export const Mobile = memo(function Mobile({ logo }: IHeaderMobileProps) {
  const { pathname } = useLocation();
  const { products } = useParams<{ products: string }>();

  const animation = useMobileAnimation();

  const navigations: TPopupItem[] = useMemo(
    () =>
      [
        { name: 'БЕГ', isActive: false, link: `/run/${products || 'sneakers'}` },
        { name: 'ВОЛЕЙБОЛ', isActive: false, link: `/volleyball/${products || 'sneakers'}` },
        { name: 'БАСКЕТБОЛ', isActive: false, link: `/basketball/${products || 'sneakers'}` },
        { name: 'КОНТАКТЫ', isActive: false, link: '/contacts' },
      ].map((item) => ({
        ...item,
        isActive: pathname.includes(item.link),
      })),
    [pathname],
  );

  useLayoutEffect(() => {
    if (
      /^\/(contacts)?|(run|volleyball|basketball)\/(sneakers|cloth|special)(\/)?/gi.test(pathname)
    ) {
      setTimeout(() => animation.start(), 600);
    }
  }, [pathname]);

  return (
    <S.Container>
      <animated.div style={animation.styles}>
        <S.Logo src={logo} alt="Логотип" />
      </animated.div>

      <animated.div style={animation.styles}>
        <Popup items={navigations} />
      </animated.div>
    </S.Container>
  );
});
