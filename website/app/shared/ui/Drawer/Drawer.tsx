'use client';

import classNames from 'classnames';
import { useState } from 'react';

import { Portal } from '../../utils/Portal';
import { Button, Wrapper } from './components';
import { TDrawerProps, TPosition } from './types/component';

export function Drawer({
  children,
  icon,
  className,
  position = 'left',
  portalStyles = '',
  defaultState = true,
  onClick,
  ...props
}: TDrawerProps) {
  const [isOpen, setOpen] = useState<boolean>(defaultState);

  const handleClick = () => {
    onClick && onClick();
    setOpen(!isOpen);
  };

  const setPosition = (position: TPosition) => {
    switch (position) {
      case 'right':
        return 'sticky top-[0px] right-[0px]';
      case 'bottom':
        return 'sticky bottom-[0px] right-[0px]';
      default:
        return 'sticky top-[0px] left-[0px]';
    }
  };

  const setSize = (position: TPosition) => {
    switch (position) {
      case 'top':
      case 'bottom':
        return `w-full h-[50%]`;
      default:
        return `w-[50%] h-full`;
    }
  };

  const setFlex = (position: TPosition) => {
    switch (position) {
      case 'top':
        return 'flex items-center flex-col';
      case 'right':
        return 'flex items-center flex-row-reverse';
      case 'bottom':
        return 'flex items-center flex-col-reverse';
      default:
        return 'flex items-center flex-row';
    }
  };

  return (
    <Portal id="drawer" styles={portalStyles}>
      <div
        className={classNames(
          // Custom class name
          className,

          // Visibility
          isOpen && 'pointer-events-auto',

          // Position
          setPosition(position),

          // Flex
          setFlex(position),

          //Size
          setSize(position),
        )}
        {...props}
      >
        <Wrapper position={position} isOpen={isOpen}>
          {children}
        </Wrapper>

        <Button position={position} isOpen={isOpen} onClick={handleClick}>
          {icon}
        </Button>
      </div>
    </Portal>
  );
}
