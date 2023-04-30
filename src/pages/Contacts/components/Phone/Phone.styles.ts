import styled from 'styled-components';

export const Container = styled('div')({
  gridColumn: 'span 1',
  alignSelf: 'end',

  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  width: 'max-content',
});

export const Phones = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const Phone = styled('li')((props) => ({
  position: 'relative',

  paddingTop: '5px',
  paddingLeft: '32px',

  '& > svg': {
    position: 'absolute',
    top: '0px',
    left: '0px',

    color: props.theme.colors.gray_medium,
  },
}));
