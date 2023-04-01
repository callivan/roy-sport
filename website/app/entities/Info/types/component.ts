type TDiv = React.ComponentPropsWithRef<'div'>;

interface IInfoOwnProps<D> {
  title: string;
  data: D[];
  element: (data: D) => JSX.Element;
}

export type TInfoProps<D> = Omit<TDiv, keyof IInfoOwnProps<D>> & IInfoOwnProps<D>;
