import Image from 'next/image'

import { ExportPaletteModal } from '@/components/modal'
import { ColorsTuple, Palette } from '@/components/palette'

import { StyledImageWrapper, StyledWrapper } from './styles'
import { GeneratedProps } from './types'

export const Generated = ({ imageUrl, colors, small }: GeneratedProps) => {
  return (
    <StyledWrapper small={small}>
      <StyledImageWrapper small={small}>
        <Image
          src={imageUrl!}
          height={800}
          width={800}
          alt={'user uploaded image'}
          layout="responsive"
        />
      </StyledImageWrapper>
      <ExportPaletteModal small={small} colors={colors as ColorsTuple} />
      <Palette colors={colors as ColorsTuple} small={small} />
    </StyledWrapper>
  )
}
