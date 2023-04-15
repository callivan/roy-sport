export type TPopupProps = IPopupOwnProps;

interface IPopupOwnProps {
  items: TPopupItem[];
}

export type TPopupItem = {
  name: string;
  isActive: boolean;
};
