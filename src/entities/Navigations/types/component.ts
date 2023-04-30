export type TNavigationProps = INavigationOwnProps;

interface INavigationOwnProps {
  items: TNavigationItem[];
  isOnlyIcon?: boolean;
  isVertical?: boolean;
  isBage?: boolean;
}

export type TNavigationItem = {
  name: string;
  link: string;
  isActive: boolean;
  icon?: JSX.Element;
  count?: number;
};
