import styled from 'styled-components';

export const Container = styled('div')((props) => ({
  display: 'flex',
  justifyContent: 'center',

  height: '100%',

  boxShadow: `0px -5px 10px 0px ${props.theme.colors.black_clear_70}`,
  borderTop: `2px solid ${props.theme.colors.gray_medium}`,

  paddingBlock: '16px',
  paddingInline: '24px',

  '&.is-vertical': {
    boxShadow: `-5px 10px 10px 0px ${props.theme.colors.black_clear_70}`,
    backgroundColor: props.theme.colors.white,

    paddingBlock: '250px 24px',
  },

  '@media(max-width: 390px)': {
    paddingInline: '8px',
  },
}));
