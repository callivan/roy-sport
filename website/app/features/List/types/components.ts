import { IProduct } from '@types';

type TUlist = React.ComponentPropsWithRef<'ul'>;

interface IListOwnProps {
  pathname: string;
  list: IProduct[];
}

export type TListProps = Omit<TUlist, keyof IListOwnProps> & IListOwnProps;
