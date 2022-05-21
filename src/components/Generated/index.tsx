import Image from 'next/image'

import { Spacer } from '@/components/Common/Spacer'
import { ColorsTuple, Palette } from '@/components/Palette'
import * as S from '@/components/Generated/styles'

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
            src={imageUrl as string}
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
