type TDiv = React.ComponentPropsWithRef<'div'>;

export type TPosition = 'top' | 'right' | 'bottom' | 'left';

interface IDrawerOwnProps {
  children: React.ReactElement;
  defaultState?: boolean;
  icon?: JSX.Element;
  position?: TPosition;
  portalStyles?: string;

  onClick?: () => void;
}

export type TDrawerProps = Omit<TDiv, keyof IDrawerOwnProps> & IDrawerOwnProps;
