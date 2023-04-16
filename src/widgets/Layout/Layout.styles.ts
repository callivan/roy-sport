import styled from 'styled-components';

export const Container = styled('div')((props) => ({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  height: '100vh',

  backgroundColor: props.theme.colors.white,
}));

export const Content = styled('div')({
  flexGrow: 1,

  width: '100%',

  overflow: 'hidden',
});
