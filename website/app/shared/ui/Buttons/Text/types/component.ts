type TButton = React.ComponentPropsWithRef<'button'>;

interface IButtonTextOwnProps {
  children?: string;
  icon?: JSX.Element;
  isActive?: boolean;
}

export type TButtonTextProps = Omit<TButton, keyof IButtonTextOwnProps> & IButtonTextOwnProps;
