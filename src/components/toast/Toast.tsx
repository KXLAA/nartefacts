import Image from 'next/image'
import Link from 'next/link'

import { StyledText, StyledWrapper } from './styles'
import { ToastProps } from './types'

export const Toast = ({ imageUrl }: ToastProps) => {
  return (
    <Link href="/saved" passHref>
      <StyledWrapper>
        <Image
          src={imageUrl!}
          height={400}
          width={400}
          alt={'image uploaded by a user to generate color palettes'}
          layout="responsive"
        />
        <StyledText>Saved</StyledText>
      </StyledWrapper>
    </Link>
  )
}
