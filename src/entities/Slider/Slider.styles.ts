import styled from 'styled-components';

export const Container = styled('div')({
  position: 'relative',

  width: '100%',
  height: '100%',

  overflow: 'hidden',
});

export const Wrapper = styled('ul')({
  scrollSnapType: 'x mandatory',

  display: 'flex',
  alignItems: 'center',

  width: '100%',
  height: '102%',

  overflowX: 'scroll',
});

export const Slide = styled('li')({
  flexShrink: 0,

  scrollSnapAlign: 'start',

  width: '100%',
  height: '100%',
});

export const ButtonsContainer = styled('div')({
  pointerEvents: 'none',

  position: 'absolute',
  top: '50%',
  left: '0%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  transform: 'translateY(-50%)',

  width: '100%',
  height: 'max-content',

  paddingInline: '24px',
});

export const DotesContainer = styled('ul')({
  position: 'absolute',
  bottom: '24px',
  left: '0px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',

  width: '100%',
  height: 'max-content',
});
