import styled from 'styled-components'
import { getColor, getFontSize, getBorder } from '@/styles/global'

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`

export const Counter = styled.div`
  background-color: ${getColor('blackLight')};
  font-weight: bold;
  width: 100%;
  border: ${getBorder('sm', 'solid', 'grayLight')};
  border-radius: 8px;
  max-width: 500px;
  font-size: ${getFontSize('lg')};
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
`
