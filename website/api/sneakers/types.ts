import { IPagination, IProduct } from '@types';

export interface IResponseSneakersProps {
  data: IProduct[];
  pagination: IPagination;
}
