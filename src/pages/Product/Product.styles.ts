import styled from 'styled-components';

export const Container = styled('div')({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  width: '100%',
  height: '100%',

  overflow: 'hidden',

  paddingInline: '24px',
  paddingBlock: '68px',
});

export const SliderContainer = styled('div')({
  position: 'absolute',
  inset: '0px',
});

export const Header = styled('div')({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  gap: '32px',

  width: '100%',
  height: 'max-content',

  zIndex: 1,
});

export const Footer = styled('div')({
  position: 'relative',

  display: 'flex',
  alignItems: 'flex-end',
  gap: '24px',

  width: '100%',
  height: 'max-content',

  zIndex: 1,
});

export const Info = styled('div')({
  flexGrow: 1,

  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});
