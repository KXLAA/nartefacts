import Image from 'next/image'

import { Flex } from '@/components/flex'
import { Palette } from '@/components/palette'

import { Content, Divider, ImageWrapper } from './styles'
import { CardProps } from './types'

export const Card = ({ albumArt, title, artist, colors }: CardProps) => {
  return (
    <Flex direction="column" gap={4}>
      <ImageWrapper>
        <Image
          src={albumArt!}
          height={385}
          width={385}
          alt={'album art'}
          layout="responsive"
          placeholder="blur"
          blurDataURL={albumArt!}
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
