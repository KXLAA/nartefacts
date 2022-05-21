import * as S from '@/components/Title/styles'

export type TitleProps = {
  text?: string
}

export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <S.Wrapper>
      <p>{text || 'description'}</p>
    </S.Wrapper>
  )
}
