/* istanbul ignore file */

import styled from 'styled-components'

import { GridProps, LayoutProps } from '@/components/Common/Layout'
import { getSize, Size } from '@/styles/global'

type LayoutSize = Extract<Size, 'sm' | 'md' | 'lg'>
const getMaxWidth = (size: LayoutSize) => {
  switch (size) {
    case 'sm':
      return 400
    case 'md':
      return 800
    case 'lg':
      return 1440
    default:
      return 1440
  }
}

export const Main = styled.main<LayoutProps>`
  max-width: ${({ size }) => getMaxWidth(size as LayoutSize)}px;
  width: 100%;
  margin: 0 auto;
  padding-left: ${({ padding }) => (padding ? getSize('xl') : getSize('md'))};
  padding-right: ${({ padding }) => (padding ? getSize('xl') : getSize('md'))};
  padding-top: ${getSize('xl')};
  padding-bottom: ${getSize('xl')};
`

export const Grid = styled.div<GridProps>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${({ columns }) => (columns ? columns : 2)},
    1fr
  );
  gap: ${({ gap }) => (gap ? getSize(gap as Size) : getSize('md'))};
`
