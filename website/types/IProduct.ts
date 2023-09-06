import { IImg } from './IImg';

export interface IProduct {
  id: string;
  name: string;
  price: number;
  sizes?: string;
  img: IImg;
  thumbnail: IImg;
}
