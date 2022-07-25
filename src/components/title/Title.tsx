import { StyledWrapper } from './styles'
import { TitleProps } from './types'

export const Title = ({ text }: TitleProps) => {
  return (
    <StyledWrapper>
      <p>{text || 'description'}</p>
    </StyledWrapper>
  )
}
