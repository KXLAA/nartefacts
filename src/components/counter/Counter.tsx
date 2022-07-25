import { StyledCounter, StyledWrapper } from './styles'
import { CounterProps } from './types'

export const Counter = ({ count }: CounterProps) => {
  return (
    <StyledWrapper>
      <StyledCounter as="span">
        <span>{`${count || 0} Gradients Generated`} </span>
      </StyledCounter>
    </StyledWrapper>
  )
}
