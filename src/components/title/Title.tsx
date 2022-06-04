import { StyledWrapper } from './styles'
import { TitleProps } from './types'

export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <StyledWrapper>
      <p>{text || 'description'}</p>
    </StyledWrapper>
  )
}
