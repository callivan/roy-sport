type TButton = React.ComponentPropsWithRef<'button'>;

interface IPopupOwnProps {
  children: React.ReactElement;
  portalStyles?: string;
}

export type TPopupProps = Omit<TButton, keyof IPopupOwnProps> & IPopupOwnProps;
