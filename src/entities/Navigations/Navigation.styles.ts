import styled from 'styled-components';

import { IListStylesProps } from './types/styles';

export const List = styled('ul')<IListStylesProps>(({ isVertical }) => ({
  display: 'flex',
  height: 'max-content',

  ...(isVertical
    ? {
        flexDirection: 'column',
        gap: '32px',

        width: 'max-content',
      }
    : {
        alignItems: 'center',
        gap: '48px',

        width: '100%',
      }),
}));

export const Item = styled('li')({
  flexGrow: 0,

  '&:last-of-type': {
    flexGrow: 1,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
