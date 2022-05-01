/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles'
import { useCopyToClipboard, useMouseOver } from '../../../lib/hooks'
import toast from 'react-hot-toast'

export type colorsTuple = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
]

export type PaletteProps = {
  colors: colorsTuple
}

type ColorBoxProps = {
  color: string
  title: string
}

const ColorBox: React.FC<ColorBoxProps> = ({ color, title }) => {
  const [value, copy] = useCopyToClipboard()
  const [hoverRef, isHovered] = useMouseOver()
  console.log(value)

  const copyToClipboard = (color: string) => {
    copy(color)
    toast('Copied to clipboard')
  }

  return (
    <>
      <S.Color
        ref={hoverRef as any}
        color={color}
        title={title}
        onClick={() => copyToClipboard(color)}
      >
        {isHovered && 'COPY'}
      </S.Color>
    </>
  )
}

export const Palette: React.FC<PaletteProps> = ({ colors }) => {
  colors?.forEach((color, index) => {
    if (!color.match(/^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i)) {
      console.warn(
        `Invalid color ${color} at index ${index} in Palette component.`,
      )
    }
  })
  return (
    <S.Wrapper title="Palette">
      {colors?.map((color) => (
        <ColorBox key={color} color={color} title="Color" />
      ))}
    </S.Wrapper>
  )
}
