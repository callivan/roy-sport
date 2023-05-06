import { animated } from '@react-spring/web';
import React, { memo, useLayoutEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Navigation, TNavigationItem } from '@entities';

import { useDesktopAnimation } from '../animations';
import * as S from './Desktop.styles';
import { IHeaderDesktopProps } from './types/component';

export const Desktop = memo(function Desktop({ logo }: IHeaderDesktopProps) {
  const { pathname } = useLocation();
  const { products } = useParams<{ products: string }>();

  const animation = useDesktopAnimation();

  const navigations: { categories: TNavigationItem[]; contacts: TNavigationItem[] } = useMemo(
    () => ({
      categories: [
        { name: 'БЕГ', isActive: false, link: `/run/${products || 'sneakers'}` },
        { name: 'ВОЛЕЙБОЛ', isActive: false, link: `/volleyball/${products || 'sneakers'}` },
        { name: 'БАСКЕТБОЛ', isActive: false, link: `/basketball/${products || 'sneakers'}` },
      ].map((category) => ({
        ...category,
        isActive: pathname.includes(category.link),
      })),
      contacts: [{ name: 'КОНТАКТЫ', isActive: false, link: '/contacts' }].map((contact) => ({
        ...contact,
        isActive: pathname.includes(contact.link),
      })),
    }),
    [pathname, products],
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

      <S.NavCenter>
        <Navigation items={navigations.categories} />
      </S.NavCenter>

      <animated.div style={animation.styles}>
        <Navigation items={navigations.contacts} />
      </animated.div>
    </S.Container>
  );
});
