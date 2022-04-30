import * as S from './styles'

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
        <S.Color key={color} color={color} title="Color" />
      ))}
    </S.Wrapper>
  )
}
