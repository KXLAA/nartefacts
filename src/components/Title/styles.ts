import styled from 'styled-components'
import { getColor, getSize } from '@/styles/global'

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${getColor('blackLight')};
  padding: ${getSize('lg')};
  border: 1px solid ${getColor('grayLight')};
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
`
