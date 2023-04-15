import styled from 'styled-components';

export const Button = styled('button')((props) => ({
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  justifyContent: 'center',

  color: props.theme.colors.gray_dark,

  padding: '0px 0px 2px 0px',

  '& > svg': {
    transition: 'color .2s ease-in-out',
  },

  '&.is-active': {
    color: props.theme.colors.black_dark,
  },

  '&:hover': {
    '& .button-line': {
      transform: 'scaleX(1)',

      backgroundColor: props.theme.colors.gray_dark,
    },
  },

  '&:active, &.is-active': {
    '& .button-line': {
      transform: 'scaleX(1)',

      backgroundColor: props.theme.colors.black_dark,
    },
  },

  '&:disabled': {
    pointerEvents: 'none',
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
