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
