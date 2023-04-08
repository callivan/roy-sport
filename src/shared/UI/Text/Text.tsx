import React from 'react';

import { theme } from '@shared';

import { TagName, TTextProps } from './types/component';

export function Text<E extends TagName>({
  as,
  variant = 'roboto_body1',
  color = 'black_dark',
  children,
  ...props
}: TTextProps<E>) {
  return React.createElement(
    as ?? 'span',
    { ...props, style: { ...props.style, ...theme.fonts[variant], color: theme.colors[color] } },
    children,
  );
}
