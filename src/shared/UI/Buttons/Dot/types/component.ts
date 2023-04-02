import React from 'react';

export type TDotProps = Omit<TDot, keyof IDotOwnProps> & IDotOwnProps;

type TDot = React.ComponentPropsWithoutRef<'button'>;

interface IDotOwnProps {
  isActive?: boolean;
}
