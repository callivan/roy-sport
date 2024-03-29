import { StaticImageData } from 'next/image';

type TButton = React.ComponentPropsWithRef<'button'>;

interface ICardOwnProps {
  src: string | StaticImageData;
  alt: string;
  name: string;
  price: number;
  preview?: string;
  isClientSide?: boolean;
}

export type TCardProps = Omit<TButton, keyof ICardOwnProps> & ICardOwnProps;
