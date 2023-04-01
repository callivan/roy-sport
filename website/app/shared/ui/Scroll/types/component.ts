type TDiv = React.ComponentPropsWithRef<'div'>;

interface IScrollOwnProps {
  children: React.ReactElement;
  isOff?: boolean;
}

export type TScrollProps = Omit<TDiv, keyof IScrollOwnProps> & IScrollOwnProps;
