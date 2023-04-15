import React from 'react';

import { TagName, TBoxProps } from './types/component';

export function Box<E extends TagName>({ as, children, ...props }: TBoxProps<E>) {
  return React.createElement(as ?? 'div', { ...props }, children);
}
