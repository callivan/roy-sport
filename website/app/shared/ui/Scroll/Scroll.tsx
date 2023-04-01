import './scroll.css';

import classNames from 'classnames';

import { TScrollProps } from './types/component';

export function Scroll({ className, children, isOff = false, ...props }: TScrollProps) {
  return (
    <div
      className={classNames(
        // Custom class name
        'scroll',
        className,

        // Size
        'w-full h-full',

        // Scroll
        'overflow-auto',
        isOff && 'overflow-hidden',
      )}
      {...props}
    >
      {children}
    </div>
  );
}
