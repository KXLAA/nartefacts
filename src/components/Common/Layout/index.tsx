/* istanbul ignore file */

import * as S from '@/components/Common/Layout/styles'
import { Header } from '@/components/Header'
import { Size } from '@/styles/global'

export interface LayoutProps {
  size?: Extract<Size, 'sm' | 'md' | 'lg'>
  children: React.ReactNode
}

export interface GridProps extends LayoutProps {
  columns: number
  gap?: Size
}

export const Main: React.FC<LayoutProps> = ({ children, size = 'lg' }) => {
  return (
    <S.Main size={size}>
      <Header />
      {children}
    </S.Main>
  )
}

export const Grid: React.FC<GridProps> = ({ children, columns, gap }) => {
  return (
    <S.Grid columns={columns} gap={gap}>
      {children}
    </S.Grid>
  )
}
