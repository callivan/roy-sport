import styled from 'styled-components';

export const Chart = styled('div')({
  gridColumn: 'span 1',
  gridRow: '1/3',

  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  width: 'max-content',
});

export const Times = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});
