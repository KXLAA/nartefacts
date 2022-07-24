import { CSS, VariantProps } from '@/lib/stitches'

import { StyledButton } from './styles'

interface Props {
  label?: string
  css?: CSS
}
type ButtonVariantsProps = VariantProps<typeof StyledButton>
type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props> &
  React.ButtonHTMLAttributes<unknown>
export type ButtonProps = Props & NativeAttrs & ButtonVariantsProps
