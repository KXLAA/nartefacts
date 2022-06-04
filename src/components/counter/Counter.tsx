import { StyledCounter, StyledWrapper } from './styles'
import { CounterProps } from './types'

export const Counter: React.FC<CounterProps> = ({ count }) => {
  return (
    <StyledWrapper>
      <StyledCounter>
        <p>{`${count || 0} Gradients Generated`} </p>
      </StyledCounter>
    </StyledWrapper>
  )
}
