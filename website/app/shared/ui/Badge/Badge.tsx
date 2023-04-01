import classNames from 'classnames';

import { TBageProps } from './types/component';

export function Badge({ content, isActive = false, className, ...props }: TBageProps) {
  return (
    <div
      className={classNames(
        // Custom class name
        className,

        // Position
        'relative',

        // Transform
        isActive ? 'scale-100' : 'scale-[0.98]',

        // Layer
        'isolate',

        // Size
        'min-w-[19px] min-h-[19px] w-max h-max',

        // Transition
        'transition-transform duration-200 ease-in-out',
      )}
      {...props}
    >
      <div
        className={classNames(
          // Color
          isActive ? 'bg-purple-450' : 'bg-purple-50',

          // Font
          'font-bold text-body3 text-white-900 break-words whitespace-pre-wrap',

          //Border
          'rounded-full',

          //Indent
          'px-[6px] py-[2px]',

          // Size
          'w-full',
        )}
      >
        {content}
      </div>

      <span
        className={classNames(
          // Position
          'absolute top-[0px] left-[0px]',

          // Size
          'w-full h-full',

          // Layer
          'z-[-1]',

          // Color
          'bg-black-50',

          // Border
          'rounded-full',

          // Effect
          'blur-[2px]',

          // Transition
          'transition-all duration-200 ease-in-out',

          // Transform
          isActive && 'translate-x-[3px] translate-y-[3px]',
        )}
      />
    </div>
  );
}
