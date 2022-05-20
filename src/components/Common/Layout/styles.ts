/* istanbul ignore file */

import styled from 'styled-components'

import { GridProps } from '@/components/Common/Layout'
import { getSize, Size } from '@/styles/global'

const getMaxWidth = ({ size }: { size: Extract<Size, 'sm' | 'md' | 'lg'> }) => {
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

export const Main = styled.main`
  max-width: ${getMaxWidth}px;
  width: 100%;
  margin: 0 auto;
  padding: ${getSize('xl')} ${getSize('xxl')};
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
