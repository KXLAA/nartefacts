import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  width: 100%;
  max-width: 800px;
`

export const Color = styled.div<{ color: string }>`
  height: 130px;
  border-radius: 8px;
  background: ${({ color }) =>
    color.match(/^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i)
      ? color
      : '#fff'};
`
