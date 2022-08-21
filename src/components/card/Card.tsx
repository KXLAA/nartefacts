import Image from 'next/image'

import { Flex } from '@/components/flex'
import { Palette } from '@/components/palette'

import { Content, Divider, ImageWrapper } from './card.styles'
import { CardProps } from './card.types'

export const Card = ({ albumArt, title, artist, colors }: CardProps) => {
  return (
    <Flex direction="column" gap={4} data-testid="album-item">
      <ImageWrapper>
        <Image
          src={albumArt!}
          height={385}
          width={385}
          alt={'album art'}
          layout="responsive"
          placeholder="blur"
          blurDataURL={albumArt! || '/static/placeholder.png'}
        />
      </ImageWrapper>
      <Divider />
      <Palette colors={colors} />
      <Content>
        <p>{title}</p>
        <span>{artist.name}</span>
      </Content>
    </Flex>
  )
}
