import * as S from './styles'

export type CounterProps = {
  count?: number
}

export const Counter: React.FC<CounterProps> = ({ count }) => {
  return (
    <S.Wrapper>
      <S.Counter>
        <p>{count || `500 Gradients Generated`} </p>
      </S.Counter>
    </S.Wrapper>
  )
}
