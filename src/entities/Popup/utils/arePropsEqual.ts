import { TPopupProps } from '../types/component';

export function arePropsEqual(oldProps: TPopupProps, newProps: TPopupProps) {
  return oldProps.items.length !== newProps.items.length ||
    !oldProps.items.every((oldItem, index) => {
      const { name, isActive } = newProps.items[index];
      return oldItem.name === name && oldItem.isActive === isActive;
    })
    ? false
    : true;
}
