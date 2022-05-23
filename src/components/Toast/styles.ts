import styled from 'styled-components'
import { getColor, getFontSize, getBorder, getSize } from '@/styles/global'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: ${getColor('blackLight')};
  border: ${getBorder('sm', 'solid', 'grayLight')};
  border-radius: 4px;
  padding: ${getSize('xs')};

  span {
    border-radius: 4px;
  }
`

export const Text = styled.p`
  color: ${getColor('grayLight')};
  font-size: ${getFontSize('lg')};
  text-align: center;
  font-weight: bold;
  padding-top: ${getSize('xs')};
`
