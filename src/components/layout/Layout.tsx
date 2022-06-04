/* istanbul ignore file */

import { Header } from '@/components/header'

import { StyledLayout } from './styles'
import { LayoutProps } from './types'

export const Main: React.FC<LayoutProps> = ({
  children,
  size = 'lg',
  ...rest
}) => {
  return (
    <StyledLayout size={size} {...rest}>
      <Header />
      {children}
    </StyledLayout>
  )
}
