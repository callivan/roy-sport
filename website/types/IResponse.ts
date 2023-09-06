import { IAddress, IPhone, ISocial } from './IContact';
import { IPagination } from './IPagination';
import { IProduct } from './IProduct';

export interface IResponseProductsProps {
  data: IProduct[];
  pagination: IPagination;
}

export interface IResponseContactsProps {
  id: string;
  addresses: IAddress[];
  socials: ISocial[];
  phones: IPhone[];
}
