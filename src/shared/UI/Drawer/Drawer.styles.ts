import styled from 'styled-components';

import { IButtonStylesProps, IContainerStylesProps, IWrapperStylesProps } from './types/styles';

export const Wrapper = styled('div')<IWrapperStylesProps>(({ isTop, top = 0 }) => ({
  position: 'fixed',
  top: `${top}px`,
  left: '0px',

  display: 'flex',

  ...(isTop
    ? {
        justifyContent: 'center',
        alignItems: 'flex-end',

        width: '100%',

        paddingBottom: '30px',
      }
    : {
        justifyContent: 'flex-end',
        alignItems: 'center',

        height: '100%',

        paddingRight: '30px',
      }),

  '&.is-active': {
    pointerEvents: 'visible',
  },
}));

export const Container = styled('div')<IContainerStylesProps>(({ isTop, ...props }) => ({
  ...(isTop ? { width: '100%', height: '0px' } : { width: '0px', height: '100%' }),

  backgroundColor: props.theme.colors.black_clear_80,

  padding: '24px',

  transition: 'width .3s ease-in-out, height .3s ease-in-out',
}));

export const ContentWrapper = styled('div')({
  width: '100%',
  height: '100%',

  overflow: 'hidden',
});

export const Button = styled('button')<IButtonStylesProps>(({ isTop, ...props }) => ({
  pointerEvents: 'visible',

  position: 'absolute',

  borderRadius: '1000px',
  color: props.theme.colors.white,

  width: '60px',
  height: '100px',

  ...(isTop
    ? {
        bottom: '-20px',

        background: `linear-gradient(90deg, transparent 0%, transparent 49.5%, ${props.theme.colors.black_clear_80} 50.5%, ${props.theme.colors.black_clear_80} 100%)`,

        transform: 'rotate(90deg)',
      }
    : {
        right: '0px',

        background: `linear-gradient(90deg, transparent 0%, transparent 49.5%, ${props.theme.colors.black_clear_80} 50.5%, ${props.theme.colors.black_clear_80} 100%)`,
      }),

  '& > .drawer-icon': {
    transform: 'rotateY(180deg)',

    transition: 'transform .15s ease-in-out',
  },

  '&.is-active > .drawer-icon': {
    transform: 'rotateY(0deg)',
  },
}));
