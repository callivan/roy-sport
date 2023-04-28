import React, { memo, useLayoutEffect, useRef, useState } from 'react';

import { Dot, IconChevron, theme } from '@shared';

import { handleChangeSlide, handleScrollSlide, handleSelectSlide } from './handlers';
import * as S from './Slider.styles';
import { ISliderProps } from './types/component';
import { arePropsEqual } from './utils/arePropsEqual';

export const Slider = memo(function Slider({ items }: ISliderProps) {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const wrapperRef = useRef<HTMLUListElement | null>(null);
  const slideRef = useRef<HTMLLIElement | null>(null);

  const isFirstSlide = activeSlide === 0;
  const isLastSlide = activeSlide === items.length - 1;

  useLayoutEffect(() => {
    if (!wrapperRef.current || !slideRef.current) return;

    const wrapper = wrapperRef.current;
    const slide = slideRef.current;

    const handleScroll = () => handleScrollSlide({ wrapper, slide, setActiveSlide });

    wrapper.addEventListener('scroll', handleScroll);

    return () => {
      wrapper.removeEventListener('scroll', handleScroll);
    };
  }, [wrapperRef.current, slideRef.current]);

  return (
    <S.Container>
      <S.Wrapper ref={wrapperRef}>
        {items.map(({ id, img }) => (
          <S.Slide
            ref={slideRef}
            key={id}
            style={{
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundImage: `url(${img})`,
            }}
          />
        ))}
      </S.Wrapper>

      <S.ButtonsContainer>
        <Dot
          disabled={isFirstSlide}
          style={{
            pointerEvents: 'visible',

            width: '32px',
            height: '32px',

            color: theme.colors.gray_medium,
            backgroundColor: isFirstSlide ? theme.colors.black_clear_70 : theme.colors.black_dark,
          }}
          onClick={() => {
            if (!wrapperRef.current || !slideRef.current) return;

            handleChangeSlide({
              direction: 'prev',
              wrapper: wrapperRef.current,
              slide: slideRef.current,
            });
          }}
        >
          <IconChevron style={{ position: 'relative', left: '-1px' }} />
        </Dot>

        <Dot
          disabled={isLastSlide}
          style={{
            pointerEvents: 'visible',

            width: '32px',
            height: '32px',

            color: theme.colors.gray_medium,
            backgroundColor: isLastSlide ? theme.colors.black_clear_70 : theme.colors.black_dark,
          }}
          onClick={() => {
            if (!wrapperRef.current || !slideRef.current) return;

            handleChangeSlide({
              direction: 'next',
              wrapper: wrapperRef.current,
              slide: slideRef.current,
            });
          }}
        >
          <IconChevron style={{ position: 'relative', left: '1px', transform: 'rotate(180deg)' }} />
        </Dot>
      </S.ButtonsContainer>

      <S.DotesContainer>
        {items.map(({ id }, index) => (
          <Dot
            key={id}
            isActive={index === activeSlide}
            onClick={() => {
              if (!wrapperRef.current || !slideRef.current) return;

              handleSelectSlide({
                index,
                activeSlide,
                wrapper: wrapperRef.current,
                slide: slideRef.current,
              });
            }}
          />
        ))}
      </S.DotesContainer>
    </S.Container>
  );
}, arePropsEqual);
