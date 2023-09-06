type TButton = React.ComponentPropsWithRef<'button'>;

interface IPopupOwnProps {
  children: React.ReactElement;
  portalStyles?: string;
}

export interface IPopupRefProps {
  onClose: () => void;
}

export type TPopupProps = Omit<TButton, keyof IPopupOwnProps> & IPopupOwnProps;
