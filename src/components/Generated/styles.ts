import styled from 'styled-components'

import { getColor, getSize } from '@/styles/global'

export const ImageWrapper = styled.div<{ small?: boolean }>`
  border: ${({ small }) => (small ? '1px' : getSize('xxs'))} solid
    ${getColor('grayLight')};
  border-radius: ${({ small }) => (small ? getSize('xs') : getSize('sm'))};
  padding: 0;

  span {
    border-radius: ${getSize('sm')};
  }
`
