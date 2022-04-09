import * as S from './styles'
import { Logo } from 'components/Logo'
import { Button } from 'components/Button'
import { colors } from 'styles/global'

export const Header = () => {
  return (
    <S.Layout>
      <Logo />

      <S.Nav>
        <Button text="create" />
        <Button
          text="likes"
          buttonColor={colors.blackSecondary}
          textColor={colors.grayPrimary}
        />
        <Button text="switch" />
      </S.Nav>
    </S.Layout>
  )
}
