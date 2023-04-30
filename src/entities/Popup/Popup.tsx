import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, ButtonIcon, ButtonText } from '@shared';

import { Portal } from './components/Portal';
import { handlePopupClick } from './handlers';
import * as S from './Popup.styles';
import { TPopupProps } from './types/component';
import { arePropsEqual } from './utils/arePropsEqual';

export const Popup = memo(function Popup({ items }: TPopupProps) {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState<boolean>(false);
  const [isStart, setStart] = useState<boolean>(false);

  return (
    <>
      <ButtonIcon
        isActive={isStart}
        onClick={() => {
          handlePopupClick({ isOpen, setOpen, setStart });
        }}
      >
        <S.Wrapper className={isStart ? 'is-active' : ''}>
          <Box className="line" as="span" />
          <Box className="line" as="span" />
          <Box className="line" as="span" />
        </S.Wrapper>
      </ButtonIcon>

      {isOpen ? (
        <Portal id="popup">
          <S.Container className={isStart ? 'is-active' : ''}>
            <S.CircleEffect className="circle-effect" />

            <S.List>
              {items.map(({ name, isActive, link }, index) => (
                <S.Item key={index} className={isStart ? 'is-active' : ''} index={index}>
                  <ButtonText
                    isActive={isActive}
                    onClick={() => {
                      if (isActive) return;
                      handlePopupClick({ isOpen, setOpen, setStart });
                      navigate(link);
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
