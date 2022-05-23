import styled from 'styled-components'

import { getSize } from '@/styles/global'

export const Layout = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${getSize('lg')};
`

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: ${getSize('md')};
`
