import { StyledWrapper } from './title.styles'
import { TitleProps } from './title.types'

export const Title = ({ text }: TitleProps) => {
  return (
    <StyledWrapper>
      <p>{text || 'description'}</p>
    </StyledWrapper>
  )
}
