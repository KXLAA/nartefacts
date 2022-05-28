import styled from 'styled-components'

import { getSize } from '@/styles/global'

export const Wrapper = styled.div`
  width: 100%;
  gap: ${getSize('lg')};
  margin: 0 auto;
`

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: ${getSize('md')};
`
