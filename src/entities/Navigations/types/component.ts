import { IListStylesProps } from './styles';

export type TNavigationProps = INavigationOwnProps & Partial<IListStylesProps>;

interface INavigationOwnProps {
  items: TNavigationItem[];
  isOnlyIcon?: boolean;
}

export type TNavigationItem = {
  name: string;
  isActive: boolean;
  icon?: JSX.Element;
};
