import Image from 'next/image'

import { Spacer } from '@/components/Common/Spacer'
import * as S from '@/components/Generated/styles'
import { ColorsTuple, Palette } from '@/components/Palette'

export type GeneratedProps = {
  imageUrl: null | string
  colors: null | ColorsTuple
  small?: boolean
}

export const Generated: React.FC<GeneratedProps> = ({
  imageUrl,
  colors,
  small,
}) => {
  return (
    <div>
      <S.ImageWrapper small={small}>
        {imageUrl && (
          <Image
            src={imageUrl ? (imageUrl as string) : '/public/placeholder.png'}
            height={800}
            width={800}
            alt={'user uploaded image'}
            layout="responsive"
          />
        )}
      </S.ImageWrapper>
      <Spacer size="sm" />
      <Palette colors={colors as ColorsTuple} small={small} />
    </div>
  )
}
