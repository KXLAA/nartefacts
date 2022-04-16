import * as S from './styles'
import { Logo } from 'components/Logo'
import { ButtonLink } from 'components/Button'
import { colors } from 'styles/global'
import Link from 'next/link'

export const Header = () => {
  return (
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
  )
}
