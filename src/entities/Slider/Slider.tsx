import { animated } from '@react-spring/web';
import React, { memo, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Dot, IconChevron, theme } from '@shared';

import {
  useDotsAnimation,
  useLeftAnimation,
  useRightAnimation,
  useShowAnimation,
} from './animations';
import { handleChangeSlide, handleScrollSlide, handleSelectSlide } from './handlers';
import * as S from './Slider.styles';
import { ISliderProps } from './types/component';
import { arePropsEqual } from './utils/arePropsEqual';

export const Slider = memo(function Slider({ items }: ISliderProps) {
  const { pathname } = useLocation();

  const [activeSlide, setActiveSlide] = useState<number>(0);

  const wrapperRef = useRef<HTMLUListElement | null>(null);
  const slideRef = useRef<HTMLLIElement | null>(null);

  const isFirstSlide = activeSlide === 0;
  const isLastSlide = activeSlide === items.length - 1;

  const showAnimation = useShowAnimation();
  const leftAnimation = useLeftAnimation();
  const rightAnimation = useRightAnimation();
  const dotesAnimation = useDotsAnimation({ count: items.length });

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

  useLayoutEffect(() => {
    if (/^\/(run|volleyball|basketball)\/(sneakers|cloth|special)\//gi.test(pathname)) {
      setTimeout(() => {
        showAnimation.start();
      }, 300);

      setTimeout(() => {
        leftAnimation.start();
        rightAnimation.start();
        dotesAnimation.start();
      }, 800);
    }
  }, [pathname]);

  return (
    <animated.div
      style={{
        ...showAnimation.styles,

        width: '100%',
        height: '100%',
      }}
    >
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
          <animated.div style={rightAnimation.styles}>
            <Dot
              disabled={isFirstSlide}
              style={{
                pointerEvents: 'visible',

                width: '32px',
                height: '32px',

                color: theme.colors.gray_medium,
                backgroundColor: isFirstSlide
                  ? theme.colors.black_clear_70
                  : theme.colors.black_dark,
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
          </animated.div>

          <animated.div style={leftAnimation.styles}>
            <Dot
              disabled={isLastSlide}
              style={{
                pointerEvents: 'visible',

                width: '32px',
                height: '32px',

                color: theme.colors.gray_medium,
                backgroundColor: isLastSlide
                  ? theme.colors.black_clear_70
                  : theme.colors.black_dark,
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
              <IconChevron
                style={{ position: 'relative', left: '1px', transform: 'rotate(180deg)' }}
              />
            </Dot>
          </animated.div>
        </S.ButtonsContainer>

        <S.DotesContainer>
          {dotesAnimation.trails.map((styles, index) => {
            const { id } = items[index];

            return (
              <animated.div key={id} style={styles}>
                <Dot
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
              </animated.div>
            );
          })}
        </S.DotesContainer>
      </S.Container>
    </animated.div>
  );
}, arePropsEqual);
