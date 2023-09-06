import { IProduct } from '@types';

type TDiv = React.ComponentPropsWithRef<'div'>;

interface IProductsOwnProps {
  pathname: string;
  products: IProduct[];
  currentPage: number;
  pageCount: number;
}

export type TProductsProps = Omit<TDiv, keyof IProductsOwnProps> & IProductsOwnProps;
