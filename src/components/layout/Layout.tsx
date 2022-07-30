/* istanbul ignore file */

import { Header } from '@/components/header'

import { StyledLayout } from './layout.styles'
import { LayoutProps } from './layout.types'

export const Main = ({ children, size = 'lg', ...rest }: LayoutProps) => {
  return (
    <StyledLayout size={size} {...rest}>
      <Header />
      {children}
    </StyledLayout>
  )
}
