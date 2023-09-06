import { IAddress } from '@types';

export interface IAddressProps {
  addresses: IAddress[];
  activeCoords: [number, number];
  onClick: (coords: [number, number]) => void;
}
