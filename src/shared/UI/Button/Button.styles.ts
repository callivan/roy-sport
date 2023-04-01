import styled from 'styled-components';

export const Button = styled('button')((props) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  backgroundColor: props.theme.colors.purple_medium,
  transformOrigin: 'center',
  paddingBlock: '4px',
  paddingInline: '12px',
  boxShadow: `1px 1px 5px 0px ${props.theme.colors.gray_dark}`,

  transition:
    'background-color .25s ease-in-out, box-shadow .2s cubic-bezier(0,0.8,0.3,1), transform  .15s cubic-bezier(0,0.8,0.3,1)',

  '&:hover': {
    backgroundColor: props.theme.colors.purple_dark,
  },

  '&:active': {
    backgroundColor: props.theme.colors.purple_dark,
    boxShadow: `0px 0px 0px 0px ${props.theme.colors.gray_dark}`,
    transform: 'scale(0.95)',
  },

  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: props.theme.colors.purple_light,
  },
}));

export const Text = styled('span')((props) => ({
  position: 'relative',
  pointerEvents: 'none',
  color: props.theme.colors.white,
  zIndex: 1,

  ...props.theme.fonts.roboto_body1,
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
