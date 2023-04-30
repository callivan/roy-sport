import styled, { css, keyframes } from 'styled-components';

import { IItemStylesProps } from './types/styles';

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

const showItem = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  };
  50% {
    transform: translateY(-5px);
    opacity: 1;
  };
  100% {
    transform: translateY(0px);
    opacity: 1;
  };`;

export const Wrapper = styled('div')(
  (props) => ({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    width: '24px',
    height: '24px',

    padding: '2px',

    '& > .line': {
      width: '2px',
      height: '100%',

      backgroundColor: props.theme.colors.black_dark,

      transition: 'transform .15s ease-in-out, height .15s ease-in-out',

      '&:first-of-type': {
        height: '14px',
      },

      '&:last-of-type': {
        height: '12px',
      },
    },

    '&.is-active > .line': {
      width: '2px',
      height: '0px',

      '&:first-of-type': {
        height: '100%',
      },

      '&:last-of-type': {
        height: '100%',
      },
    },
  }),
  () =>
    css`
      &.is-active > .line {
        &:first-of-type {
          animation: ${rotateFirst} 0.5s ease-in-out forwards;
        }

        &:last-of-type {
          animation: ${rotateLast} 0.5s ease-in-out forwards;
        }
      }

      &:not(.is-active):hover > .line {
        animation: ${move} 0.5s ease-in-out 0.1s;

        &:first-of-type {
          animation: ${move} 0.5s ease-in-out;
        }

        &:last-of-type {
          animation: ${move} 0.5s ease-in-out 0.2s;
        }
      }
    `,
);

export const Container = styled('div')({
  pointerEvents: 'none',

  position: 'relative',
  top: '88px',

  width: '100%',
  height: '100%',

  overflow: 'auto',

  paddingBlock: '24px',
  paddingInline: '24px',

  '&.is-active': {
    pointerEvents: 'visible',

    '& > .circle-effect': {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    },
  },

  '& > .circle-effect': {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
  },
});

export const CircleEffect = styled('span')((props) => ({
  position: 'absolute',
  top: '0px',
  left: '0px',

  width: '100%',
  height: '100%',

  backgroundColor: props.theme.colors.white,

  transition: 'clip-path .3s ease-in-out',
}));

export const List = styled('ul')({
  position: 'relative',
  top: '50%',
  left: '50%',

  display: 'flex',
  flexDirection: 'column',
  gap: '32px',

  width: 'max-content',

  transform: 'translate(-50%, -50%)',
});

export const Item = styled('ul')<IItemStylesProps>(
  {
    opacity: 0,
    transform: 'translateY(20px)',
  },
  ({ index }) => css`
    &.is-active {
      animation: ${showItem} 0.5s ease-in-out forwards ${index / 10}s;
    }
  `,
);
