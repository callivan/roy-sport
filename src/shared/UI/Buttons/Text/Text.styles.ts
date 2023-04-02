import styled from 'styled-components';

export const Button = styled('button')((props) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  justifyContent: 'center',
  color: props.theme.colors.gray_dark,
  padding: '0px',

  '&:hover': {
    '& .button-line': {
      transform: 'scaleX(1)',
      backgroundColor: props.theme.colors.gray_dark,
    },
  },

  '&:active, &.is-active': {
    '& > .button-text, & > .button-icon': {
      color: props.theme.colors.black_dark,
    },

    '& .button-line': {
      transform: 'scaleX(1)',
      backgroundColor: props.theme.colors.black_dark,
    },
  },

  '&:disabled': {
    pointerEvents: 'none',

    '& > .button-text, & > .button-icon': {
      color: props.theme.colors.gray_medium,
    },
  },
}));

export const Line = styled('span')({
  position: 'absolute',
  bottom: '0px',
  left: '0px',
  width: '100%',
  height: '1px',
  backgroundColor: 'transparent',
  transform: 'scaleX(0)',
  transformOrigin: 'left center',

  transition: 'transform .2s ease-in-out, background-color .2s ease-in-out',
});

export const IconContainer = styled('div')({
  width: 'max-content',
  height: 'max-content',

  fontSize: '0px',
  lineHeight: '0px',
  color: 'inherit',

  transition: 'color .2s ease-in-out',
});

export const Text = styled('span')((props) => ({
  position: 'relative',
  pointerEvents: 'none',
  color: 'inherit',
  textTransform: 'uppercase',

  ...props.theme.fonts.roboto_body1,

  transition: 'color .2s ease-in-out',
}));
