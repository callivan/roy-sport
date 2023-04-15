import styled, { css, keyframes } from 'styled-components';

import { IContainerStylesProps, IWrapperStylseProps } from './types/styles';

const move = keyframes`
  0% {
    transform: translateY(0px);
  };
  25% {
    transform: translateY(-5px);
  };
  75% {
    transform: translateY(2px);
  };
  100% {
    transform: translateY(0px);
  };
`;

const rotateFirst = keyframes`
  0% {
    transform: translateX(0px);
    height: 14px;
  };
  35% {
    transform: translateX(9px);
  };
  65% {
    transform: translateX(9px) rotate(0deg);
    height: 100%;
  };
  100% {
    transform: translateX(9px) rotate(45deg);
    height: 100%;
  };`;

const rotateLast = keyframes`
  0% {
    transform: translateX(0px);
    height: 12px;
  };
  35% {
    transform: translateX(-9px);
  };
  65% {
    transform: translateX(-9px) rotate(0deg);
    height: 100%;
  };
  100% {
    transform: translateX(-9px) rotate(-45deg);
    height: 100%;
  };`;

export const Wrapper = styled('div')<IWrapperStylseProps>(
  ({ isActive, ...props }) => ({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    width: '24px',
    height: '24px',

    padding: '2px',

    '& > .line': {
      width: '2px',
      height: isActive ? '0px' : '100%',

      backgroundColor: props.theme.colors.black_dark,

      transition: 'transform .15s ease-in-out, height .15s ease-in-out',

      '&:first-of-type': {
        height: isActive ? '100%' : '14px',
      },

      '&:last-of-type': {
        height: isActive ? '100%' : '12px',
      },
    },
  }),
  ({ isActive }) =>
    !isActive &&
    css`
      &:hover > .line {
        animation: ${move} 0.5s ease-in-out 0.1s;

        &:first-of-type {
          animation: ${move} 0.5s ease-in-out;
        }

        &:last-of-type {
          animation: ${move} 0.5s ease-in-out 0.2s;
        }
      }
    `,

  ({ isActive }) =>
    isActive &&
    css`
      & > .line {
        &:first-of-type {
          animation: ${rotateFirst} 0.5s ease-in-out forwards;
        }

        &:last-of-type {
          animation: ${rotateLast} 0.5s ease-in-out forwards;
        }
      }
    `,
);

export const Container = styled('div')<IContainerStylesProps>(({ isActive }) => ({
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '400px',
  height: '600px',

  overflow: 'hidden',

  pointerEvents: isActive ? 'visible' : 'none',
  opacity: isActive ? 1 : 0,

  transition: 'opacity .15s ease-in-out',

  '& > .circle-effect': {
    clipPath: isActive ? 'circle(130% at 50% 0%)' : 'circle(0% at 50% 0%)',
  },
}));

export const CircleEffect = styled('span')({
  position: 'absolute',
  inset: '0px',

  backgroundColor: 'white',

  transition: 'clip-path .3s ease-in-out',
});

export const List = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
});

export const Item = styled('ul')({});
