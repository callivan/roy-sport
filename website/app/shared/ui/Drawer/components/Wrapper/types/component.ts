import { TPosition } from '../../../types/component';

type TDiv = React.ComponentPropsWithRef<'div'>;

interface IWrapperOwnProps {
  isOpen: boolean;
  position: TPosition;
}

export type TWrapperProps = Omit<TDiv, keyof IWrapperOwnProps> & IWrapperOwnProps;
