import styled from 'styled-components';

export const List = styled('ul')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 270px))',
  gridAutoRows: 'minmax(340px, max-content)',
  gap: '24px',

  justifyContent: 'center',

  width: '100%',
});

export const Item = styled('li')({
  gridColumn: 'span 1',
});
