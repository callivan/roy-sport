import { IWrapperStylesProps } from './styles';

export type TDrawerProps = Omit<IDrawerOwnProps, keyof IWrapperStylesProps> & IWrapperStylesProps;

interface IDrawerOwnProps {
  children: React.ReactElement;
}
