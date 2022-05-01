import * as S from './styles'
import Image from 'next/image'
// import Link from 'next/link'

export type ToastProps = {
  heading?: string
  imageUrl: string
}

export const Toast: React.FC<ToastProps> = ({ imageUrl }) => {
  return (
    <S.Wrapper>
      <Image
        src={imageUrl!}
        height={400}
        width={400}
        alt={'image uploaded by a user to generate color palettes'}
        layout="responsive"
      />
      <S.Text>Saved</S.Text>
    </S.Wrapper>
  )
}
