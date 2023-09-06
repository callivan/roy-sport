import { TCategory, TOrder } from './IFIlter';

export interface IRequestProps {
  isClientSide?: boolean;
  pagination?: IPaginationRequestProps;
  filters?: IFiltersRequestProps;
}

export interface IFiltersRequestProps {
  category?: TCategory[];
  order?: TOrder;
}

export interface IPaginationRequestProps {
  limit?: number;
  page?: number;
}
