import React, { memo, useLayoutEffect, useRef, useState } from 'react';

import { IconChevron } from './assets/icons/Chevron';
import { Portal } from './components/Portal';
import * as S from './Drawer.styles';
import { handleClick, handleClickOutside } from './handlers';
import { TDrawerProps } from './types/component';
import { setContainerWidth } from './utils';

export const Drawer = memo(function Drawer({ children, isTop }: TDrawerProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    setContainerWidth({ isOpen, isTop: !!isTop, container });
  }, [containerRef.current, isOpen]);

  useLayoutEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (!wrapperRef.current) return;

      handleClickOutside({ e, wrapper: wrapperRef.current, setOpen });
    };

    document.addEventListener('click', handleOutside);

    return () => {
      document.removeEventListener('click', handleOutside);
    };
  }, [wrapperRef.current]);

  return (
    <Portal id="drawer">
      <S.Wrapper isTop={isTop} ref={wrapperRef}>
        <S.Container isTop={isTop} ref={containerRef}>
          <S.ContentWrapper className="drawer-content">{children}</S.ContentWrapper>
        </S.Container>

        <S.Button isOpen={isOpen} isTop={isTop} onClick={() => handleClick({ setOpen })}>
          <IconChevron className="drawer-icon" width={32} height={32} />
        </S.Button>
      </S.Wrapper>
    </Portal>
  );
});
