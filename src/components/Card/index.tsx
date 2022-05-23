import Image from 'next/image'

import * as S from '@/components/Card/styles'

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
    <S.Card>
      <S.Gradient />
      <S.ImageWrapper>
        <Image
          src={albumArt!}
          height={385}
          width={385}
          alt={'album art'}
          layout="responsive"
        />
      </S.ImageWrapper>
    </S.Card>
  )
}
