import { TOrder } from '@types';

type TDiv = React.ComponentPropsWithRef<'div'>;

interface IPaginationOwnProps {
  pathname: string;
  currentPage: number;
  pageCount: number;
  order: TOrder;
  step?: 1 | 2 | 3;
}

export type TPaginationProps = Omit<TDiv, keyof IPaginationOwnProps> & IPaginationOwnProps;
