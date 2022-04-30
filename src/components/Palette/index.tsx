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
  return (
    <S.Wrapper title="Palette">
      {colors.map((color) => (
        <S.Color key={color} color={color} title="Color" />
      ))}
    </S.Wrapper>
  )
}
