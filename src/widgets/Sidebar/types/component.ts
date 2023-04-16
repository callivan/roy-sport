import { IContainerStylesProps } from './styles';

export type TSidebarProps = ISidebarOwnProps & IContainerStylesProps;

interface ISidebarOwnProps {
  isOnlyIcon?: boolean;
}
