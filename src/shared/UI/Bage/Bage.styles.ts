import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled('div')((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: props.theme.colors.purple_light,
  borderRadius: '1000px',
  boxShadow: `4px 4px 4px 0px ${transparentize(0.75, props.theme.colors.black_dark)}`,

  minWidth: '18px',
  minHeight: '18px',

  paddingBlock: '2px',
  paddingInline: '4px',

  transition: 'background-color .2s ease-in-out',

  '&.is-active': {
    backgroundColor: props.theme.colors.purple_medium,
  },
}));

export const Text = styled('span')((props) => ({
  color: props.theme.colors.white,

  ...props.theme.fonts.roboto_body3,
}));
