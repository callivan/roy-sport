type TDiv = React.ComponentPropsWithRef<'div'>;

interface IFilterOwnProps {
  pathname: string;
}

export type TFilterProps = Omit<TDiv, keyof IFilterOwnProps> & IFilterOwnProps;
