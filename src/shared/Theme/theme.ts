import { transparentize } from 'polished';

export const theme = {
  colors: {
    purple_medium: '#8168F0',
    purple_light: '#CEC3FC',

    gray_dark: '#818A94',
    gray_medium: '#E1E3E6',
    gray_clear: transparentize(0.7, '#EFEFEF'),

    black_dark: '#383838',
    black_clear_70: transparentize(0.3, '#383838'),
    black_clear_80: transparentize(0.2, '#383838'),

    white: '#FFFFFF',
    white_clear: transparentize(0.3, '#FFFFFF'),
  },
  fonts: {
    roboto_h1: {
      fontWeight: 500,
      fontSize: '32px',
      lineHeight: '38px',
    },
    roboto_h2: {
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '28px',
    },
    roboto_body1: {
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '24px',
    },
    roboto_body2: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
    },
    roboto_body3: {
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '14px',
    },
  },
};
