import styled from 'styled-components';

export const Container = styled('div')((props) => ({
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',

  backgroundColor: props.theme.colors.white,
  boxShadow: `0px -5px 10px 0px ${props.theme.colors.black_clear_70}`,

  paddingBlock: '16px',
  paddingInline: '24px',
}));

export const Logo = styled('img')({
  objectFit: 'cover',
  objectPosition: 'center',

  width: '75px',
  height: '56px',
});

export const NavCenter = styled('div')({
  position: 'absolute',
  left: '50%',

  transform: 'translateX(-50%)',
});
