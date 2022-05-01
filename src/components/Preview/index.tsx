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
      <S.Buttons>
        <Button text="refresh" onClick={reset ? reset : undefined} fullWidth />
        <Button text="save" onClick={reset ? reset : undefined} fullWidth />
      </S.Buttons>

      <S.ImageWrapper>
        <Image
          src={imageUrl!}
          height={800}
          width={800}
          alt={'album art'}
          layout="responsive"
        />
      </S.ImageWrapper>

      <Palette colors={colors as colorsTuple} />
    </S.Wrapper>
  )
}
