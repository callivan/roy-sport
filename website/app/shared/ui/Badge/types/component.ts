type TDiv = React.ComponentPropsWithRef<'div'>;

interface IBageOwnProps {
  content: string;
  isActive?: boolean;
}

export type TBageProps = Omit<TDiv, keyof IBageOwnProps> & IBageOwnProps;
