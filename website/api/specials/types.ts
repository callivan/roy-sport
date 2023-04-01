import { IPagination, ISpecial } from '@types';

export interface IResponseSpecialsProps {
  data: ISpecial[];
  meta: {
    pagination: IPagination;
  };
}
