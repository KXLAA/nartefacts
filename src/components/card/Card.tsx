import Image from 'next/image'

import { Flex } from '@/components/flex'

import { Gradient, ImageWrapper } from './styles'
import { CardProps } from './types'

export const Card = ({ albumArt }: CardProps) => {
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
