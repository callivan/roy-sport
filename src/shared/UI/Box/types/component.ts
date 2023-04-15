import React from 'react';

type TTags = 'div' | 'span';

interface IBoxOwnProps<E extends TagName> {
  children?: React.ReactNode;
  as?: E;
}

export type TagName = keyof Pick<JSX.IntrinsicElements, TTags>;

export type TBoxProps<E extends TagName> = Omit<
  React.ComponentPropsWithRef<E>,
  keyof IBoxOwnProps<E>
> &
  IBoxOwnProps<E>;
