import React from 'react'
import styled from 'styled-components'

const LayoutStyled = styled.main`
  max-width: 1248px;
  margin: 0 auto;
  padding: 1.5rem;
`

export const Layout = ({
  children,
}: React.PropsWithChildren<Record<never, unknown>>) => {
  return <LayoutStyled>{children}</LayoutStyled>
}
