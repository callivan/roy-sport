import React from 'react';
import { DefaultTheme } from 'styled-components';

type TTags = 'h1' | 'h2' | 'h3' | 'span' | 'p';

interface ITextOwnProps<E extends TagName> {
  children: string;
  variant?: keyof DefaultTheme['fonts'];
  color?: keyof DefaultTheme['colors'];
  as?: E;
}

export type TagName = keyof Pick<JSX.IntrinsicElements, TTags>;

export type TTextProps<E extends TagName> = Omit<
  React.ComponentPropsWithRef<E>,
  keyof ITextOwnProps<E>
> &
  ITextOwnProps<E>;
