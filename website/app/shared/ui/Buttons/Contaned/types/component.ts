type TButton = React.ComponentPropsWithRef<'button'>;

interface IButtonContainedOwnProps {
  children?: string;
  icon?: JSX.Element;
  isCircle?: boolean;
}

export type TButtonContainerProps = Omit<TButton, keyof IButtonContainedOwnProps> &
  IButtonContainedOwnProps;
