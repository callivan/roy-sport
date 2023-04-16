import styled from 'styled-components';

import { IListStylesProps } from './types/styles';

export const List = styled('ul')<IListStylesProps>(({ isVertical }) => ({
  display: 'flex',

  width: 'max-content',
  height: 'max-content',

  ...(isVertical
    ? {
        flexDirection: 'column',
        gap: '32px',
      }
    : {
        alignItems: 'center',
        gap: '48px',
      }),
}));

export const Item = styled('li')({
  flexGrow: 0,

  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
});
