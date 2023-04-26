export type IBageProps = Omit<TDiv, keyof IBageOwnProps> & IBageOwnProps;

type TDiv = Pick<React.ComponentPropsWithoutRef<'div'>, 'className' | 'id'>;

interface IBageOwnProps {
  text: string;
  isActive?: boolean;
}
