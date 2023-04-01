import { IImg } from './IImg';

export interface ISpecial {
  id: string;

  attributes: {
    name: string;
    price: number;
  };

  img: IImg;
}
