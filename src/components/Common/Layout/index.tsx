/* istanbul ignore file */

import { StyledLayout } from '@/components/Common/Layout/styles'
import { Header } from '@/components/Header'
import { Size } from '@/styles/global'

export { Grid } from '@/components/Common/Layout/styles'

export interface LayoutProps {
  size?: Extract<Size, 'sm' | 'md' | 'lg'>
  children: React.ReactNode
  as?: JSX.IntrinsicElements
}

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
