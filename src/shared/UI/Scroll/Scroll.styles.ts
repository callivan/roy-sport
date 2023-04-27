import styled from 'styled-components';

export const Content = styled('div')((props) => ({
  width: '100%',
  height: '100%',

  overflow: 'auto',

  paddingRight: '8px',

  'scrollbar-width': 'thin',
  'scrollbar-color': `${props.theme.colors.gray_medium} transparent`,

  '&::-webkit-scrollbar': {
    width: '6px',
    height: '6px',
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',

    marginBlock: '5px',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: props.theme.colors.gray_medium,
    borderRadius: '10px',

    '&:hover': {
      backgroundColor: props.theme.colors.gray_dark,
    },
  },
}));
