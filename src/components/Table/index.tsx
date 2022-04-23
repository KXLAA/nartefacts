import * as S from './styles'

export const Table = () => {
  return (
    <>
      <h1>TABLE </h1>
      <S.Table>
        <S.Header>
          <S.HeaderContent>Album Art</S.HeaderContent>
          <S.HeaderContent>Colors</S.HeaderContent>
          <S.HeaderContent>Artist</S.HeaderContent>
          <S.HeaderContent>Likes</S.HeaderContent>
          <S.HeaderContent>Actions</S.HeaderContent>
        </S.Header>
        <S.Row>
          <S.RowContent>Testing</S.RowContent>
          <S.RowContent>Testing</S.RowContent>
          <S.RowContent>Testing</S.RowContent>
          <S.RowContent>Testing</S.RowContent>
          <S.RowContent>Testing</S.RowContent>
        </S.Row>

        <S.Row>
          <S.RowContent>Testing</S.RowContent>
          <S.RowContent>Testing</S.RowContent>
          <S.RowContent>Testing</S.RowContent>
          <S.RowContent>Testing</S.RowContent>
          <S.RowContent>Testing</S.RowContent>
        </S.Row>

        <S.Row>
          <S.RowContent>Testing</S.RowContent>
          <S.RowContent>Testing</S.RowContent>
          <S.RowContent>Testing</S.RowContent>
          <S.RowContent>Testing</S.RowContent>
          <S.RowContent>Testing</S.RowContent>
        </S.Row>
      </S.Table>
    </>
  )
}
