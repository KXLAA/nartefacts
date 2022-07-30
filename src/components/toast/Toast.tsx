import Image from 'next/image'
import Link from 'next/link'

import { StyledText, StyledWrapper } from './toast.styles'
import { ToastProps } from './toast.types'

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
