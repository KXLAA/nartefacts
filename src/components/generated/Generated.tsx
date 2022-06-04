import Image from 'next/image'

import { ColorsTuple, Palette } from '@/components/palette'
import { Spacer } from '@/components/spacer'

import { StyledImageWrapper } from './styles'
import { GeneratedProps } from './types'

export const Generated: React.FC<GeneratedProps> = ({
  imageUrl,
  colors,
  small,
}) => {
  return (
    <div>
      <StyledImageWrapper small={small}>
        <Image
          src={imageUrl ? (imageUrl as string) : '/public/placeholder.png'}
          height={800}
          width={800}
          alt={'user uploaded image'}
          layout="responsive"
        />
      </StyledImageWrapper>
      {small ? <Spacer size="2" /> : <Spacer size="4" />}
      <Palette colors={colors as ColorsTuple} small={small} />
    </div>
  )
}
