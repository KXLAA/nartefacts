import Link from 'next/link'
import * as S from './styles'
import { Logo } from 'components/Logo'
import { ButtonLink } from 'components/Button'
import { colors } from 'styles/global'
import { Arrow } from 'components/Icons'

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
              <ButtonLink text="create" />
            </Link>

            <Link href="/likes" passHref>
              <ButtonLink
                text="likes"
                buttonColor={colors.blackSecondary}
                textColor={colors.grayPrimary}
              />
            </Link>

            <Link href="/info" passHref>
              <ButtonLink text="info" />
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
