import { TPosition } from '../../../types/component';

type TButton = React.ComponentPropsWithRef<'button'>;

interface IButtonOwnProps {
  isOpen: boolean;
  position: TPosition;
}

export type TButtonProps = Omit<TButton, keyof IButtonOwnProps> & IButtonOwnProps;
