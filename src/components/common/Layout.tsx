import React from 'react'
import styled from 'styled-components'

const LayoutStyled = styled.main`
  max-width: 1248px;
  margin: 0 auto;
  padding: 1.5rem;
  padding-top: 5rem;
`

export const Layout: React.FC = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>
}
