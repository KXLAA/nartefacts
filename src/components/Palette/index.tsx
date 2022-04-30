import * as S from './styles'

export type PaletteProps = {
  colors: string[]
}

export const Palette: React.FC<PaletteProps> = ({ colors }) => {
  return (
    <>
      <h1>Palette</h1>

      <S.Wrapper>
        {colors.map((color) => (
          <S.Color key={color} color={color} />
        ))}
      </S.Wrapper>
    </>
  )
}
