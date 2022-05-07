import React from 'react'
import styled from 'styled-components'

export interface LayoutProps {
  children: React.ReactNode
  mw?: string
  pt?: string
  pb?: string
  p?: string
}

export interface GridProps extends LayoutProps {
  columns: number
  gap?: string
}

const MainLayoutStyled = styled.main<LayoutProps>`
  max-width: ${({ mw }) => (mw ? mw : '1248px')};
  margin: 0 auto;
  padding: 1.5rem;
  padding-top: 5rem;
`

const SecondaryLayoutStyled = styled(MainLayoutStyled)`
  padding: 0rem;
  padding-top: 0rem;
`

const GridStyled = styled.div<GridProps>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${({ columns }) => (columns ? columns : 2)},
    1fr
  );
  gap: ${({ gap }) => (gap ? gap : '1.5rem')};
  padding-top: 5rem;
`

export const Main: React.FC = ({ children }) => {
  return <MainLayoutStyled>{children}</MainLayoutStyled>
}

export const Secondary: React.FC<LayoutProps> = ({ children, mw }) => {
  return <SecondaryLayoutStyled mw={mw}>{children}</SecondaryLayoutStyled>
}

export const Grid: React.FC<GridProps> = ({ children, columns }) => {
  return <GridStyled columns={columns}>{children}</GridStyled>
}
