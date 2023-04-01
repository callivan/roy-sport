import { IPagination, IProduct } from '@types';

export interface IResponseClothesProps {
  data: IProduct[];
  meta: {
    pagination: IPagination;
  };
}
