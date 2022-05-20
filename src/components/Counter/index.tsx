import * as S from '@/components/Counter/styles'

export type CounterProps = {
  count?: number | undefined | null
}

export const Counter: React.FC<CounterProps> = ({ count }) => {
  return (
    <S.Wrapper>
      <S.Counter>
        <p>{`${count || 0} Gradients Generated`} </p>
      </S.Counter>
    </S.Wrapper>
  )
}
