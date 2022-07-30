import { CSS, VariantProps } from '@/lib/stitches'

import { StyledButton } from './button.styles'

type ButtonVariantsProps = VariantProps<typeof StyledButton>

export interface ButtonProps extends ButtonVariantsProps {
  onClick?: () => void
  disabled?: boolean
  label?: string
  css?: CSS
  children?: React.ReactNode
}
