import styled from 'styled-components'

import { getBorder, getSize } from '@/styles/global'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSize('lg')};
`

export const Gradient = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  );
  width: 100%;
  height: 122px;
  border: ${getBorder('md', 'solid', 'grayBase')};
  border-radius: ${getSize('xs')};
`

export const ImageWrapper = styled.div`
  border: ${getBorder('md', 'solid', 'grayBase')};
  border-radius: ${getSize('xs')};
  span {
    border-radius: ${getSize('xs')};
  }
`
