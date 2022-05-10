import * as S from './styles'

export type TitleProps = {
  title?: string
  description?: string
}

export const Title: React.FC<TitleProps> = ({ title, description }) => {
  return (
    <S.Box>
      <S.Heading>{title || 'title'}</S.Heading>
      <S.Description>{description || 'description'}</S.Description>
    </S.Box>
  )
}
