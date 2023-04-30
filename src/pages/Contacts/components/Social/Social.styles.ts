import styled from 'styled-components';

export const Container = styled('div')({
  gridColumn: 'span 1',

  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  width: 'max-content',
});

export const Links = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const Link = styled('li')((props) => ({
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
