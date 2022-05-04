import * as S from './styles'

export type CounterProps = {
  count?: number | undefined | null
}

export const Counter: React.FC<CounterProps> = ({ count }) => {
  return (
    <S.Wrapper>
      <S.Counter>
        <p>{`${count} Gradients Generated`} </p>
      </S.Counter>
    </S.Wrapper>
  )
}
