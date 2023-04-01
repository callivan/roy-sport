import classNames from 'classnames';

import { TPosition } from '../../types/component';
import { TWrapperProps } from './types/component';

export function Wrapper({ isOpen, position, className, ...props }: TWrapperProps) {
  const setSize = (position: TPosition, isOpen: boolean) => {
    switch (position) {
      case 'top':
      case 'bottom':
        return isOpen ? 'w-full h-full' : 'w-full h-[0px]';
      default:
        return isOpen ? 'w-full h-full' : 'w-[0px] h-full';
    }
  };
  return (
    <div
      className={classNames(
        // Custom class name
        className,

        //Size
        setSize(position, isOpen),

        // Color
        'bg-white-50',

        // Effect
        'backdrop-blur-[2px]',
        !isOpen && 'opacity-0',

        // Visibility
        'overflow-hidden',

        // Transition
        'transition-[width_height_opacity] duration-500 ease-in-out',
      )}
      {...props}
    >
      {props.children}
    </div>
  );
}
