type TDiv = React.ComponentPropsWithRef<'div'>;

interface IInfoOwnProps {
  title: string;
  text: string;
}

export type TInfoProps = Omit<TDiv, keyof IInfoOwnProps> & IInfoOwnProps;
