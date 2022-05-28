import Link from 'next/link'

import { Button } from '@/components/Button'
import { Spacer } from '@/components/Common/Spacer'
import * as S from '@/components/Header/styles'
import { Logo } from '@/components/Logo'

export type HeaderProps = {
  primary?: boolean
  secondary?: boolean
}

export const Header: React.FC<HeaderProps> = ({ primary, secondary }) => {
  return (
    <>
      {primary ? (
        <S.Layout>
          <Logo />
          <S.Nav>
            <Link href="/create" passHref>
              <Button label="create" />
            </Link>

            <Link href="/saved" passHref>
              <Button label="saved" />
            </Link>

            {/* <Link href="/info" passHref>
              <Button label="info" buttonType="link-primary" width="full" />
            </Link> */}
          </S.Nav>
          <Spacer size="lg" />
        </S.Layout>
      ) : null}

      {secondary ? (
        <S.Layout>
          <S.Nav>
            <Link href="/">
              <Logo width="250" />
            </Link>
          </S.Nav>
          <Spacer size="lg" />
        </S.Layout>
      ) : null}
    </>
  )
}
