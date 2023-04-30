import styled from 'styled-components';

export const List = styled('ul')({
  display: 'flex',
  alignItems: 'center',
  gap: '48px',

  width: 'max-content',
  height: 'max-content',

  '&.is-vertical': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '32px',
  },
});

export const Item = styled('li')({
  flexGrow: 0,

  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
});
