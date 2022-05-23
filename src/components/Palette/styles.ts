import styled from 'styled-components'
import { getColor, getFontSize } from '@/styles/global'
import { ColorBoxProps } from '@/components/Palette'

export const Color = styled.div<ColorBoxProps>`
  height: ${({ small }) => (small === true ? '58px' : '130px')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: ${({ small }) => (small ? '4px' : '8px')};
  transition: all 0.3s ease-in-out;
  background: ${({ color }) =>
    color.match(/^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i)
      ? color
      : getColor('blackLight')};
  :hover {
    filter: brightness(150%);
  }
  span {
    font-weight: bold;
    font-size: ${({ small }) =>
      small ? getFontSize('sm') : getFontSize('lg')};
    color: ${getColor('white')};
  }
`
