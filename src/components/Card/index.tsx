import Image from 'next/image'

import { Gradient, ImageWrapper } from '@/components/Card/styles'
import { Flex } from '@/components/Flex'

export type CardProps = {
  image?: string | null
  colors?: string[] | null
  likeCount?: number | null
  textColor?: string | null
  albumArt?: string | null
  spotify?: string | null
  apple?: string | null
  type?: string | null
  description?: string | null
  title?: string | null
  artist?: {
    name?: string | null
    photoUrl?: string | null
    biography?: string | null
  } | null
}

export const Card: React.FC<CardProps> = ({ albumArt }) => {
  return (
    <Flex direction="column" gap={4}>
      <Gradient />
      <ImageWrapper>
        <Image
          src={albumArt!}
          height={385}
          width={385}
          alt={'album art'}
          layout="responsive"
        />
      </ImageWrapper>
    </Flex>
  )
}
