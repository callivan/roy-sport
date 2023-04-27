import { transparentize } from 'polished';
import styled from 'styled-components';

const translating = (x: number, y: number) => ({ transform: `translate(${x}px, ${y}px)` });

export const Wrapper = styled('div')({
  position: 'relative',
});

export const Blur = styled('span')((props) => ({
  position: 'absolute',
  inset: '0px',

  backgroundColor: transparentize(0.75, props.theme.colors.black_dark),
  filter: 'blur(1px)',

  borderRadius: '1000px',
}));

export const Container = styled('div')((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: props.theme.colors.purple_light,
  borderRadius: '1000px',

  minWidth: '18px',
  minHeight: '18px',

  paddingBlock: '2px',
  paddingInline: '4px',

  ...translating(0, 0),

  transition: 'background-color .2s ease-in-out, transform .2s ease-in-out',

  '&.is-active': {
    backgroundColor: props.theme.colors.purple_medium,
    ...translating(-4, -4),
  },
}));

export const Text = styled('span')((props) => ({
  color: props.theme.colors.white,

  ...props.theme.fonts.roboto_body3,
}));
