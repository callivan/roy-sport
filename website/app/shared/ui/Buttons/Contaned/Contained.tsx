'use client';

import classNames from 'classnames';

import { circleAnimation } from './animations';
import { TButtonContainerProps } from './types/component';

export function ButtonContained({
  children,
  icon,
  isCircle = false,
  className,
  ...props
}: TButtonContainerProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick && props.onClick(e);

    const target = e.currentTarget;

    if (!target || !(target instanceof HTMLButtonElement)) return;

    const circle = target.querySelector<HTMLSpanElement>('.circle');

    if (!circle) return;

    circleAnimation({
      button: target,
      circleElement: circle,
      clickPosition: { x: e.clientX, y: e.clientY },
    });
  };

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
        'flex items-center justify-center',

        // Color
        'bg-black-900',

        // Size
        'w-max h-max',

        // Fonts
        'font-regular text-body2 break-words whitespace-pre-wrap text-left',

        // Indent
        'py-1',
        children && icon ? 'pl-1 pr-2 gap-1' : children && !icon ? 'px-2' : 'px-1',

        // Effect
        // eslint-disable-next-line sonarjs/no-duplicate-string
        isCircle && 'rounded-[50%]',

        // Layer
        'isolate',

        // Transition
        'group duration-50 transition-[transform_background-color] ease-in-out',

        // Hover
        'hover:scale-[0.99]',

        // Action
        'active:scale-[0.98]',

        // Disabled
        'disabled:bg-black-50 disabled:pointer-events-none cursor-default',
      )}
      onClick={handleClick}
      {...props}
    >
      {icon && (
        <span
          className={classNames(
            //Visibility
            'pointer-events-none',

            //Color
            'text-white-900',
          )}
        >
          {icon}
        </span>
      )}

      {children && (
        <span
          className={classNames(
            // Color
            'text-white-900',

            // Transform
            'translate-y-[-1px]',

            // Layer
            'z-[1]',
          )}
        >
          {children}
        </span>
      )}

      <span
        className={classNames(
          // Position
          'absolute top-[0px] left-[0px]',

          // Size
          'w-full h-full',

          // Transform
          'translate-x-[4px] translate-y-[4px]',

          // Color
          'bg-black-50',

          // Effect
          'blur-[2px]',
          isCircle && 'rounded-[50%]',

          // Layer
          'z-[-1]',

          // Transition
          'duration-50 transition-transform ease-in-out',

          // Hover
          'group-hover:translate-x-[2px] group-hover:translate-y-[2px]',

          // Active
          'group-active:translate-x-[0px] group-active:translate-y-[0px]',
        )}
      />

      <span
        className={classNames(
          // Custom class name
          'circle',

          // Position
          'absolute top-[0px] left-[0px]',

          // Size
          'w-full h-full',

          // Layer
          'z-0',

          // Color
          'bg-gray-50',

          // Effect
          'opacity-0',
          isCircle && 'rounded-[50%]',
        )}
      />
    </button>
  );
}
