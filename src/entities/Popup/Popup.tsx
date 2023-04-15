import React, { useState } from 'react';

import { Box, ButtonIcon, ButtonText } from '@shared';

import { Portal } from './components/Portal';
import { handlePopupClick, handlePopupItemClick } from './handlers';
import * as S from './Popup.styles';
import { TPopupItem, TPopupProps } from './types/component';

export function Popup({ items }: TPopupProps) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [list, setList] = useState<TPopupItem[]>(items);

  return (
    <>
      <ButtonIcon isActive={isOpen} onClick={() => handlePopupClick({ setOpen })}>
        <S.Wrapper isActive={isOpen}>
          <Box className="line" as="span" />
          <Box className="line" as="span" />
          <Box className="line" as="span" />
        </S.Wrapper>
      </ButtonIcon>

      <Portal id="popup">
        <S.Container isActive={isOpen}>
          <S.CircleEffect className="circle-effect" />

          <S.List>
            {list.map(({ name, isActive }, index) => (
              <S.Item key={index}>
                <ButtonText
                  isActive={isActive}
                  onClick={() => {
                    if (isActive) return;
                    handlePopupItemClick({ index, setList });
                  }}
                >
                  {name}
                </ButtonText>
              </S.Item>
            ))}
          </S.List>
        </S.Container>
      </Portal>
    </>
  );
}
