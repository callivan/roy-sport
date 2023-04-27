import styled from 'styled-components';

export const List = styled('ul')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 270px))',
  gridAutoRows: 'minmax(340px, max-content)',
  justifyContent: 'center',
  gap: '24px',

  width: '100%',

  padding: '24px',
});

export const Item = styled('li')({
  gridColumn: 'span 1',
});
