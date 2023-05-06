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

export const SidebarWrapper = styled('div')({
  position: 'relative',
  top: '-2px',

  width: 'max-content',
  height: 'calc(100% + 1px)',

  zIndex: 1,

  '&.is-horizontal': {
    display: 'flex',
    justifyContent: 'center',

    width: '100%',
    height: 'max-content',
  },
});
