import { ICardProps } from '../types/component';

export function arePropsEqual(oldProps: ICardProps, newProps: ICardProps) {
  return oldProps.img === newProps.img &&
    oldProps.name === newProps.name &&
    oldProps.price === newProps.price
    ? true
    : false;
}
