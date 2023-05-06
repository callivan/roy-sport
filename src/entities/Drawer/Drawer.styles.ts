import styled from 'styled-components';

export const Wrapper = styled('div')({
  width: '100%',
  height: '100%',

  paddingTop: '93px',
});

export const Container = styled('div')({
  position: 'relative',

  display: 'flex',
  alignItems: 'center',

  // eslint-disable-next-line sonarjs/no-duplicate-string
  width: 'max-content',
  height: '100%',

  paddingRight: '30px',

  '&.is-active': {
    pointerEvents: 'visible',
  },

  '&.is-top': {
    flexDirection: 'column',

    width: '100%',
    height: 'max-content',

    paddingRight: '0px',
    paddingBottom: '30px',
  },
});

export const Content = styled('div')((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 'max-content',
  height: '100%',

  backgroundColor: props.theme.colors.black_clear_70,
  backdropFilter: 'blur(1px)',

  padding: '24px',

  '&.is-top': {
    flexDirection: 'column',

    width: '100%',
    height: 'max-content',

    padding: '24px 16px',
  },
}));

export const Button = styled('button')((props) => ({
  pointerEvents: 'visible',

  position: 'absolute',
  right: '0px',

  width: '60px',
  height: '100px',

  borderRadius: '30px',

  background: `linear-gradient(90deg, transparent 0%, transparent 50%, ${props.theme.colors.black_clear_70} 50%, ${props.theme.colors.black_clear_70} 100%)`,

  '& > * > svg': {
    transform: 'rotate(180deg)',
  },

  '&.is-top': {
    right: 'auto',
    bottom: '0px',

    width: '100px',
    height: '60px',

    background: `linear-gradient(180deg, transparent 0%, transparent 50%, ${props.theme.colors.black_clear_70} 50%, ${props.theme.colors.black_clear_70} 100%)`,

    '& > * > svg': {
      transform: 'rotate(-90deg)',
    },
  },
}));
