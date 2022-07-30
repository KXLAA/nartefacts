import { StyledCounter, StyledWrapper } from './counter.styles'
import { CounterProps } from './counter.types'

export const Counter = ({ count }: CounterProps) => {
  return (
    <StyledWrapper>
      <StyledCounter as="span">
        <span>{`${count || 0} Gradients Generated`} </span>
      </StyledCounter>
    </StyledWrapper>
  )
}
