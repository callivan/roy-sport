import React from 'react';

import { IButtonStylesProps, ITextStylesProps } from './styles';

export type IButtonProps = Omit<TButton, keyof IButtonOwnProps> &
  IButtonOwnProps &
  IButtonStylesProps &
  ITextStylesProps;

type TButton = React.ComponentPropsWithoutRef<'button'>;

interface IButtonOwnProps {
  children: string;
  icon?: JSX.Element;
}
