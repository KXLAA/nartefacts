import Image from 'next/image'

import { Gradient, ImageWrapper } from '@/components/Card/styles'
import { Flex } from '@/components/Flex'
import { Album } from '@/graphql/generated/graphql'

export type CardProps = Album

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
