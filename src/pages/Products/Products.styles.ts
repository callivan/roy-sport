import styled from 'styled-components';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',

  height: '100%',
  overflow: 'hidden',

  '&.is-horizontal': {
    flexDirection: 'column',
  },
});

export const Content = styled('div')({
  flexGrow: 1,

  display: 'flex',
  flexDirection: 'column',
  gap: '24px',

  height: '100%',

  paddingRight: '8px',
});

export const FiltersContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  '&.is-horizontal': {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '24px',
  },

  padding: '24px 24px 0px 24px',
});

export const SidebarWrapper = styled('div')((props) => ({
  position: 'relative',
  top: '-1px',

  width: 'max-content',
  height: 'calc(100% + 1px)',

  boxShadow: `-5px 10px 10px 0px ${props.theme.colors.black_clear_70}`,
  backgroundColor: props.theme.colors.white,

  '&.is-horizontal': {
    display: 'flex',
    justifyContent: 'center',

    width: '100%',
    height: 'max-content',

    boxShadow: `0px -5px 10px 0px ${props.theme.colors.black_clear_70}`,
    borderTop: `2px solid ${props.theme.colors.gray_medium}`,
  },
}));
