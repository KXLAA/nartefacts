/* istanbul ignore file */

import styled from 'styled-components'

import { getSize, Size } from '@/styles/global'

interface Dimensions {
  axis?: 'horizontal' | 'vertical'
  size: Size
}

const getHeight = ({ axis, size }: Dimensions) => {
  return axis === 'horizontal' ? 1 : getSize(size)
}
const getWidth = ({ axis, size }: Dimensions) => {
  return axis === 'vertical' ? 1 : getSize(size)
}

export const Spacer = styled.span`
  display: block;
  width: ${getWidth};
  min-width: ${getWidth};
  height: ${getHeight};
  min-height: ${getHeight};
`
