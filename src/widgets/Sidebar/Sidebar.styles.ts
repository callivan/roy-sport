import styled from 'styled-components';

import { IContainerStylesProps } from './types/styles';

export const Container = styled('div')<IContainerStylesProps>(({ isVertical }) => ({
  paddingBlock: isVertical ? '250px 24px' : '16px',
  paddingInline: '24px',
}));
