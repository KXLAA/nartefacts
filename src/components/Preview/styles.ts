import styled from 'styled-components'
import { getSize, getBorder } from '@/styles/global'

export const Wrapper = styled.div`
  width: 100%;
  gap: ${getSize('lg')};
  margin: 0 auto;
`

export const ImageWrapper = styled.div`
  border: ${getBorder('sm', 'solid', 'grayBase')};
  border-radius: 4px;
  padding: 0;

  span {
    border-radius: 4px;
  }
`

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: ${getSize('md')};
`
