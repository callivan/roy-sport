type TAside = React.ComponentPropsWithRef<'aside'>;

interface IAsideOwnProps {
  counts: number[];
}

export type TAsideProps = Omit<IAsideOwnProps, keyof TAside> & TAside;
