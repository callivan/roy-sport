import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>((props) => ({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    '-webkit-font-smoothing': 'antialiased',
    outline: '1px solid transparent',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  button: {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  input: {
    border: 'none',
    backgroundColor: 'transparent',
  },
  body: {
    position: 'relative',
    fontFamily: 'Roboto',
    backgroundColor: props.theme.colors.white,
  },
}));
