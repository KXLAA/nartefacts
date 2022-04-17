import React from 'react'
import styled from 'styled-components'

const MainLayoutStyled = styled.main`
  max-width: 1248px;
  margin: 0 auto;
  padding: 1.5rem;
  padding-top: 5rem;
`

const CardLayoutStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding-top: 5rem;
`

export const Main: React.FC = ({ children }) => {
  return <MainLayoutStyled>{children}</MainLayoutStyled>
}

export const Cards: React.FC = ({ children }) => {
  return <CardLayoutStyled>{children}</CardLayoutStyled>
}
