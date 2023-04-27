import React, { memo, useState } from 'react';

import { Box, ButtonIcon, ButtonText } from '@shared';

import { Portal } from './components/Portal';
import { handlePopupClick, handlePopupItemClick } from './handlers';
import * as S from './Popup.styles';
import { TPopupItem, TPopupProps } from './types/component';
import { arePropsEqual } from './utils/arePropsEqual';

export const Popup = memo(function Popup({ items }: TPopupProps) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isStart, setStart] = useState<boolean>(false);
  const [list, setList] = useState<TPopupItem[]>(items);

  return (
    <>
      <ButtonIcon
        isActive={isStart}
        onClick={() => {
          if (isOpen) {
            setStart(false);
            setTimeout(() => handlePopupClick({ setOpen }), 300);
            return;
          }

          handlePopupClick({ setOpen });
          setTimeout(() => setStart(true), 100);
        }}
      >
        <S.Wrapper isActive={isStart}>
          <Box className="line" as="span" />
          <Box className="line" as="span" />
          <Box className="line" as="span" />
        </S.Wrapper>
      </ButtonIcon>

      {isOpen ? (
        <Portal id="popup">
          <S.Container isActive={isStart}>
            <S.CircleEffect className="circle-effect" />

            <S.List>
              {list.map(({ name, isActive }, index) => (
                <S.Item key={index} isActive={isStart} index={index}>
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
      ) : null}
    </>
  );
}, arePropsEqual);
