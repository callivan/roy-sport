import { DefaultTheme } from 'styled-components';

export interface IButtonStylesProps {
  isActive?: boolean;
  isIcon?: boolean;
}

export interface ITextStylesProps {
  fontVarian?: keyof DefaultTheme['fonts'];
}
