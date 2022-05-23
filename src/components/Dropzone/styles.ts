import styled from 'styled-components'
import { getColor, getFontSize, getBorder, getSize } from '@/styles/global'

export const Drop = styled.div`
  background: ${getColor('blackLight')};
  border: ${getBorder('sm', 'dashed', 'grayBase')};
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 800px;
  padding: ${getSize('md')};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${getColor('white')};
    transform: translateX(0rem) translateY(0.125rem);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: ${getSize('md')};
  p {
    font-size: ${getFontSize('lg')};
    font-weight: bold;
    width: 70%;
    text-align: center;
    color: ${getColor('grayLight')};
  }
`
