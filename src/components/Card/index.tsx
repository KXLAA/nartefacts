import * as S from './styles'
import Image from 'next/image'

export type CardProps = {
  image?: string
  colors?: string[]
  likeCount?: number
  textColor?: string
  albumArt?: string
  spotify?: string
  apple?: string
  type?: string
  description?: string
  title?: string
  artist?: {
    name?: string
    photoUrl?: string
    biography?: string
  }
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
