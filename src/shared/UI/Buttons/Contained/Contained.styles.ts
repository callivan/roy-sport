import { transparentize } from 'polished';
import styled from 'styled-components';

import { IButtonStylesProps } from './types/styles';

export const Wrapper = styled('div')({
  position: 'relative',
});

export const Blur = styled('span')((props) => ({
  position: 'absolute',
  inset: '0px',

  backgroundColor: transparentize(0.75, props.theme.colors.black_dark),
  filter: 'blur(1px)',
}));

export const Button = styled('button')<IButtonStylesProps>(({ isIcon, ...props }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  justifyContent: 'center',

  backgroundColor: props.theme.colors.black_dark,
  color: props.theme.colors.white,

  transformOrigin: 'center',
  transform: 'translate(-4px, -4px)',

  paddingBlock: '8px',
  paddingInline: isIcon ? '8px 16px' : '16px',

  transition: 'background-color .3s ease-in-out, transform  .3s cubic-bezier(0,0.8,0.3,1)',

  '&:hover': {
    transform: 'translate(-2px, -2px)',
  },

  '&:active': {
    transform: 'translate(0px, 0px)',
  },

  '&:disabled': {
    pointerEvents: 'none',

    backgroundColor: props.theme.colors.gray_dark,

    transform: 'translate(0px, 0px)',

    '& > .button-text, & > .button-icon': {
      color: props.theme.colors.gray_medium,
    },
  },
}));

export const IconContainer = styled('div')({
  width: 'max-content',
  height: 'max-content',

  fontSize: '0px',
  lineHeight: '0px',
  color: 'inherit',

  transition: 'color .3s ease-in-out',
});

export const Text = styled('span')((props) => ({
  position: 'relative',

  pointerEvents: 'none',

  color: 'inherit',

  zIndex: 1,

  ...props.theme.fonts.roboto_body1,

  transition: 'color .3s ease-in-out',
}));

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
