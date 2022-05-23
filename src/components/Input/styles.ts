import styled from 'styled-components'

import { getBorder, getColor, getFontSize, getSize } from '@/styles/global'

export const Input = styled.input`
  width: 100%;
  height: 80px;
  background: none;
  border: ${getBorder('sm', 'dashed', 'grayLight')};
  border-radius: 8px;
  padding: ${getSize('md')};
  color: ${getColor('grayLight')};
  font-size: ${getFontSize('lg')};
`
