import { CSSProp, DefaultTheme } from 'styled-components';

declare module 'react' {
  interface Attributes {
    style?: CSSProp | ((props: { theme: DefaultTheme }) => CSSProp);
  }
}
