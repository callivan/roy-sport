import { transparentize } from 'polished';
import styled from 'styled-components';

import { IButtonStylesProps, ITextStylesProps } from './types/styles';

const translating = (x: number, y: number) => ({ transform: `translate(${x}px, ${y}px)` });
const MAX_CONTENT = 'max-content';

export const Wrapper = styled('div')({
  position: 'relative',

  width: MAX_CONTENT,
});

export const Blur = styled('span')((props) => ({
  position: 'absolute',
  inset: '0px',

  backgroundColor: transparentize(0.75, props.theme.colors.black_dark),
  filter: 'blur(1px)',
}));

export const Button = styled('button')<IButtonStylesProps>(({ isActive, isIcon, ...props }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  justifyContent: 'center',

  backgroundColor: props.theme.colors.black_dark,
  color: props.theme.colors.white,

  transformOrigin: 'center',

  ...translating(-4, -4),

  paddingBlock: '8px',
  paddingInline: isIcon ? '8px 16px' : '16px',

  transition: 'background-color .3s ease-in-out, transform  .3s cubic-bezier(0,0.8,0.3,1)',

  ...(isActive
    ? {
        pointerEvents: 'none',

        ...translating(0, 0),
      }
    : {
        '&:hover': {
          ...translating(-2, -2),
        },

        '&:active': {
          ...translating(0, 0),
        },
      }),

  '&:disabled': {
    pointerEvents: 'none',

    backgroundColor: props.theme.colors.gray_dark,

    ...translating(0, 0),

    '& > .button-text, & > .button-icon': {
      color: props.theme.colors.gray_medium,
    },
  },
}));

export const IconContainer = styled('div')({
  width: MAX_CONTENT,
  height: MAX_CONTENT,

  fontSize: '0px',
  lineHeight: '0px',
  color: 'inherit',

  transition: 'color .3s ease-in-out',
});

export const Text = styled('span')<ITextStylesProps>(
  ({ fontVarian = 'roboto_body1', ...props }) => ({
    position: 'relative',

    pointerEvents: 'none',

    color: 'inherit',

    zIndex: 1,

    ...props.theme.fonts[fontVarian],

    transition: 'color .3s ease-in-out',
  }),
);

export const CircleContainer = styled('div')({
  position: 'absolute',
  inset: '0px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '5px',

  overflow: 'hidden',
});

export const CircleEffect = styled('div')({
  width: '100%',
  height: '100%',
});
