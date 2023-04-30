import styled from 'styled-components';

export const Container = styled('div')({
  position: 'relative',

  width: '100%',
  height: '100%',
});

export const Contacts = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(3, max-content)',
  gap: '24px',
  justifyContent: 'center',
  alignContent: 'center',

  width: 'max-content',
  height: '100%',

  '@media(max-width: 744px)': {
    width: '100vw',
    height: '80vw',
  },
});
