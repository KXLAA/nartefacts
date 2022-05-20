import { getSize } from '@/styles/global'
import styled from 'styled-components'

export const Layout = styled.header`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  gap: ${getSize('md')};
`

export const Spacer = styled.div`
  width: 48px;
  height: 48px;
`
