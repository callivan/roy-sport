import React from 'react';

export type IButtonProps = Omit<TButton, keyof IButtonOwnProps> & IButtonOwnProps;

type TButton = React.ComponentPropsWithoutRef<'button'>;

interface IButtonOwnProps {
  children: string;
  icon?: JSX.Element;
}
