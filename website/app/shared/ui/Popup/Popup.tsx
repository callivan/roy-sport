'use client';

import './popup.css';

import classNames from 'classnames';
import { useState } from 'react';

import { Portal } from '../../utils/Portal';
import { TPopupProps } from './types/component';

export function Popup({ children, className, portalStyles = '', ...props }: TPopupProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className={classNames(
          // Custom class name
          'popup-button',
          isOpen && 'active',
          className,

          // Position
          'relative',

          // Flex
          'flex items-end justify-center',

          // Size
          'w-3 h-3',

          //Transition
          'group',
        )}
        onClick={() => {
          setOpen(!isOpen);
        }}
        {...props}
      >
        <span
          className={classNames('line absolute translate-x-[-7px] bg-black-900 w-[2px] h-[14px]')}
        />
        <span
          className={classNames('line absolute translate-x-[0px] bg-black-900 w-[2px] h-[20px]')}
        />
        <span
          className={classNames('line absolute translate-x-[7px] bg-black-900 w-[2px] h-[12px]')}
        />
      </button>

      <Portal id="popup" styles={portalStyles}>
        <div
          className={classNames(
            // Visibility
            isOpen && 'pointer-events-auto',

            // Transform
            'origin-top',
            !isOpen && 'translate-y-[-50px]',

            // Size
            'w-full h-full',

            // Effect
            !isOpen && 'opacity-0',

            // Color
            'bg-white-900',

            // Transition
            'transition-[transform_opacity] duration-300 ease-in-out',
          )}
        >
          {children}
        </div>
      </Portal>
    </>
  );
}
