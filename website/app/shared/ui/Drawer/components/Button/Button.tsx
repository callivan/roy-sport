import classNames from 'classnames';

import { TPosition } from '../../types/component';
import { TButtonProps } from './typees/component';

export function Button({ isOpen, position, className, ...props }: TButtonProps) {
  const setPosition = (position: TPosition) => {
    switch (position) {
      case 'top':
        return 'relative bottom-[0px]';
      case 'right':
        return 'relative left-[0px]';
      case 'bottom':
        return 'relative top-[0px]';
      default:
        return 'relative right-[0px]';
    }
  };

  const setSize = (position: TPosition) => {
    switch (position) {
      case 'top':
      case 'bottom':
        return 'w-[80px] h-[45px]';
      default:
        return 'w-[45px] h-[80px]';
    }
  };

  const setRotate = (position: TPosition, isOpen: boolean) => {
    // eslint-disable-next-line sonarjs/no-all-duplicated-branches
    switch (position) {
      case 'top':
        return isOpen ? 'rotate-[270deg]' : 'rotate-90';
      case 'right':
        return isOpen ? 'rotate-0' : 'rotate-180';
      case 'bottom':
        return isOpen ? 'rotate-90' : 'rotate-[270deg]';
      default:
        return `rotate-${isOpen ? 180 : 0}`;
    }
  };

  const setBorder = (position: TPosition) => {
    switch (position) {
      case 'top':
        return 'rounded-br-[40px] rounded-bl-[40px]';
      case 'right':
        return 'rounded-tl-[40px] rounded-bl-[40px]';
      case 'bottom':
        return 'rounded-tr-[40px] rounded-tl-[40px]';
      default:
        return 'rounded-tr-[40px] rounded-br-[40px]';
    }
  };

  const setFlex = (position: TPosition) => {
    switch (position) {
      case 'top':
        return 'flex items-start justify-center flex-[0_0_auto]';
      case 'right':
        return 'flex items-center justify-end flex-[0_0_auto]';
      case 'bottom':
        return 'flex items-end justify-center flex-[0_0_auto]';
      default:
        return 'flex items-center justify-start flex-[0_0_auto]';
    }
  };

  return (
    <button
      className={classNames(
        // Custom class name
        className,

        // Visibility
        'cursor-pointer pointer-events-auto',

        // Flex
        setFlex(position),

        // Position
        setPosition(position),

        // Size
        setSize(position),

        // Border
        setBorder(position),

        // Effect
        'backdrop-blur-[2px]',

        // Color
        'bg-white-50',
      )}
      onClick={props.onClick}
      {...props}
    >
      <div
        className={classNames(
          // Transition
          'transition-transform duration-500 ease-in-out',

          // Transform
          setRotate(position, isOpen),
        )}
      >
        {props.children}
      </div>
    </button>
  );
}
