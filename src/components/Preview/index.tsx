import * as S from './styles'
import Image from 'next/image'
import { colorsTuple, Palette } from 'components/Palette'
import { Button } from 'components/Button'

export type PreviewProps = {
  heading?: string
  imageUrl: string
  setImageUrl?: React.Dispatch<React.SetStateAction<string | undefined>>
  colors: colorsTuple
}

export const Preview: React.FC<PreviewProps> = ({
  imageUrl,
  colors,
  setImageUrl,
}) => {
  return (
    <S.Wrapper title="Preview">
      <Button
        text="refresh"
        onClick={setImageUrl ? () => setImageUrl('') : undefined}
      />
      <Image src={imageUrl!} height={800} width={800} alt={'album art'} />
      <Palette colors={colors as colorsTuple} />
    </S.Wrapper>
  )
}
