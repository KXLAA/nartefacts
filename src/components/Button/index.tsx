import * as S from './styles'
import { capitalize } from '../../utils'

export type ButtonProps = {
  text?: string
  buttonColor?: string
  textColor?: string
}

const Button: React.FC<ButtonProps> = ({ buttonColor, text, textColor }) => {
  return (
    <S.Button buttonColor={buttonColor} textColor={textColor} role="button">
      {capitalize(text!) || 'Button'}
    </S.Button>
  )
}

export default Button
