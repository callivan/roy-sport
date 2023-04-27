import styled from 'styled-components';

import {
  IContainerStylesProps,
  IFiltersContainerStylesProps,
  ISidebarWrapperStylesProps,
} from './types/styles';

export const Container = styled('div')<IContainerStylesProps>(({ isHorizontal }) => ({
  display: 'flex',

  height: '100%',
  overflow: 'hidden',

  ...(isHorizontal ? { flexDirection: 'column' } : { flexDirection: 'row' }),
}));

export const Content = styled('div')({
  flexGrow: 1,

  display: 'flex',
  flexDirection: 'column',
  gap: '24px',

  height: '100%',

  paddingRight: '8px',
});

export const FiltersContainer = styled('div')<IFiltersContainerStylesProps>(({ isHorizontal }) => ({
  display: 'flex',

  ...(isHorizontal
    ? { flexDirection: 'row', alignItems: 'center', gap: '24px' }
    : { flexDirection: 'column', gap: '16px' }),

  padding: '24px 24px 0px 24px',
}));

export const SidebarWrapper = styled('div')<ISidebarWrapperStylesProps>(
  ({ isHorizontal, ...props }) => ({
    position: 'relative',
    top: '-1px',

    backgroundColor: props.theme.colors.white,

    ...(isHorizontal
      ? {
          display: 'flex',
          justifyContent: 'center',

          width: '100%',
          height: 'max-content',

          boxShadow: `0px -5px 10px 0px ${props.theme.colors.black_clear_70}`,
          borderTop: `2px solid ${props.theme.colors.gray_medium}`,
        }
      : {
          width: 'max-content',
          height: 'calc(100% + 1px)',

          boxShadow: `-5px 10px 10px 0px ${props.theme.colors.black_clear_70}`,
        }),
  }),
);
