import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import * as S from './Layout.styles';
import { ILayoutProps } from './types/component';

export function Layout({ header }: ILayoutProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/run/sneakers');
    }
  }, [pathname]);

  return (
    <S.Container>
      <S.Header>{header}</S.Header>

      <S.Content>
        <Outlet />
      </S.Content>
    </S.Container>
  );
}
