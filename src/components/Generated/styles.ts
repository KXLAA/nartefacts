import styled from 'styled-components'

import { getBorder, getSize } from '@/styles/global'

export const ImageWrapper = styled.div<{ small?: boolean }>`
  border: ${({ small }) =>
    small
      ? getBorder('sm', 'solid', 'grayLight')
      : getBorder('base', 'solid', 'grayLight')};
  border-radius: ${({ small }) => (small ? getSize('xs') : getSize('sm'))};
  padding: 0;

  span {
    border-radius: ${({ small }) => (small ? getSize('xs') : getSize('sm'))};
  }
`
