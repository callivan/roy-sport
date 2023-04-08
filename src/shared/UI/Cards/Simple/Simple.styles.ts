import { transparentize } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled('div')({
  cursor: 'pointer',

  position: 'relative',

  '&:hover': {
    '& > .card-container': {
      transform: 'translate(-3px, -3px)',
    },
  },

  '&:active': {
    '& > .card-container': {
      transform: 'translate(-0px, -0px)',
    },
  },
});

export const Blur = styled('span')((props) => ({
  position: 'absolute',
  inset: '0px',

  backgroundColor: transparentize(0.75, props.theme.colors.black_dark),
  filter: 'blur(4px)',
}));

export const Container = styled('div')({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',

  width: '250px',
  height: 'max-content',

  transform: 'translate(-6px, -6px)',
  transformOrigin: 'center',

  transition: 'transform .2s ease-in-out',
});

export const Img = styled('img')({
  width: '100%',
  height: '304px',

  objectPosition: 'center',
  objectFit: 'fill',
});

export const Footer = styled('div')((props) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',

  backgroundColor: props.theme.colors.white,
  backdropFilter: 'blur(4px)',

  paddingBlock: '8px',
  paddingInline: '8px',

  overflow: 'hidden',
}));

export const Text = styled('span')((props) => ({
  color: props.theme.colors.black_dark,

  ...props.theme.fonts.roboto_body2,

  '&:last-of-type': {
    flexShrink: 0,
  },
}));
