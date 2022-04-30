import * as S from './styles'
import Image from 'next/image'
import { colorsTuple, Palette } from 'components/Palette'
import { Button } from 'components/Button'

export type PreviewProps = {
  heading?: string
  imageUrl: string
  reset?: () => void
  colors: colorsTuple
}

export const Preview: React.FC<PreviewProps> = ({
  imageUrl,
  colors,
  reset,
}) => {
  return (
    <S.Wrapper title="Preview">
      <Button text="refresh" onClick={reset ? reset : undefined} />
      <Image src={imageUrl!} height={800} width={800} alt={'album art'} />
      <Palette colors={colors as colorsTuple} />
    </S.Wrapper>
  )
}
