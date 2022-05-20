import Link from 'next/link'
import * as S from '@/components/Header/styles'

import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'
import { colors } from '@/styles/global'
import { Arrow } from '@/components/Icons'

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
              <Button label="create" buttonType="link-primary" />
            </Link>

            <Link href="/likes" passHref>
              <Button label="likes" buttonType="link-secondary" />
            </Link>

            <Link href="/info" passHref>
              <Button label="info" buttonType="link-primary" />
            </Link>
          </S.Nav>
        </S.Layout>
      ) : null}

      {secondary ? (
        <S.Layout>
          <S.Nav>
            <Link href="/" passHref>
              <Arrow position="left" color={colors.grayPrimary} size={48} />
            </Link>

            <Link href="/">
              <Logo width="250" />
            </Link>

            <S.Spacer />
          </S.Nav>
        </S.Layout>
      ) : null}
    </>
  )
}
