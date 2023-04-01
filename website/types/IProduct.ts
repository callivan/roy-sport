import { IImg } from './IImg';

export interface IProduct {
  id: string;

  attributes: {
    name: string;
    price: number;
    sizes: string;
  };

  img: IImg;
}
