import classNames from 'classnames';

import { TButtonTextProps } from './types/component';

export function ButtonText({
  children,
  icon,
  isActive = false,
  className,
  ...props
}: TButtonTextProps) {
  return (
    <button
      className={classNames(
        // Custom class name
        className,

        //Visibility
        'cursor-pointer',

        // Position
        'relative',

        // Flex
        'flex items-center justify-center gap-1',

        // Indent
        'pb-[2px]',

        // Transition
        'group',

        // Font
        'font-regular text-body2 break-words whitespace-pre-wrap text-left',

        // Disabled
        'disabled:pointer-events-none cursor-default',
      )}
      {...props}
    >
      {icon && (
        <span
          className={classNames(
            //Visibility
            'pointer-events-none',

            // Color
            isActive ? 'text-black-900' : 'text-gray-900',

            // Transition
            'duration-200 transition-colors ease-in-out',

            // Active
            'group-active:text-black-900',

            // Disabled
            'group-disabled:text-gray-450',
          )}
        >
          {icon}
        </span>
      )}

      {children && (
        <span
          className={classNames(
            // Color
            isActive ? 'text-black-900' : 'text-gray-900',

            // Transition
            'duration-200 transition-colors ease-in-out',

            // Active
            'group-active:text-black-900',

            // Disabled
            'group-disabled:text-gray-450',
          )}
        >
          {children}
        </span>
      )}

      <span
        className={classNames(
          // Position
          'absolute bottom-[0px] left-[0px]',

          // Size
          'w-full h-[1px]',

          // Color
          isActive ? 'bg-black-900' : 'bg-gray-900',

          // Transform
          !isActive && 'scale-x-0 origin-left',

          // Transition
          'transition-all duration-200 ease-in-out',

          // Hover
          'group-hover:scale-x-100',

          // Active
          'group-active:scale-x-100 group-active:bg-black-900',

          // Disabled
          'group-disabled:bg-gray-450 group-disabled:scale-x-0',
        )}
      />
    </button>
  );
}
