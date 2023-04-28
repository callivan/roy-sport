import { ISliderProps } from '../types/component';

export function arePropsEqual(oldProps: ISliderProps, newProps: ISliderProps) {
  return oldProps.items.length !== newProps.items.length ||
    !oldProps.items.every((oldItem, index) => {
      const { id, img } = newProps.items[index];
      return oldItem.id === id && oldItem.img === img;
    })
    ? false
    : true;
}
