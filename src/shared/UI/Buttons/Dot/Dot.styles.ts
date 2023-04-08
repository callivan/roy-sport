import { transparentize } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: '50%',
});

export const Blur = styled('span')((props) => ({
  position: 'absolute',
  inset: '0px',
  backgroundColor: transparentize(0.75, props.theme.colors.black_dark),
  filter: 'blur(1px)',
  borderRadius: '50%',
}));

export const Button = styled('button')((props) => ({
  width: '10px',
  height: '10px',

  borderRadius: '50%',
  backgroundColor: props.theme.colors.gray_dark,

  transformOrigin: 'center',
  transform: 'translate(-4px, -4px)',

  transition: 'background-color .3s ease-in-out, transform  .3s cubic-bezier(0,0.8,0.3,1)',

  '&:hover': {
    transform: 'translate(-2px, -2px)',
  },

  '&:active, &.is-active': {
    transform: 'translate(0px, 0px)',

    backgroundColor: props.theme.colors.black_dark,
  },
}));
