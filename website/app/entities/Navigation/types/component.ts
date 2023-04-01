type TUList = React.ComponentPropsWithRef<'ul'>;

interface INavigationOwnProps<D> {
  data: D[];
  isColumn?: boolean;
  elementItem: (data: D, index: number) => JSX.Element;
}

export type TNavigationProps<D> = Omit<TUList, keyof INavigationOwnProps<D>> &
  INavigationOwnProps<D>;
