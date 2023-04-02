export type IBageProps = Omit<TDiv, keyof IBageOwnProps> & IBageOwnProps;

type TDiv = React.ComponentPropsWithoutRef<'div'>;

interface IBageOwnProps {
  text: string;
  isActive?: boolean;
}
