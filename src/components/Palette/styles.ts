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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  background: ${({ color }) =>
    color.match(/^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i)
      ? color
      : '#202020'};
  :hover {
    filter: brightness(150%);
  }
`
