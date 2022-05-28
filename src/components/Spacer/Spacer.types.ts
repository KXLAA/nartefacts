import { CSS, VariantProps } from '@/lib/stitches.config'

import { StyledSpacer } from './Spacer.styles'

export interface Props {
  vertical?: number
  horizontal?: number
  css?: CSS
  as?: keyof Pick<JSX.IntrinsicElements, 'span' | 'div'>
}
export type SpacerVariantsProps = VariantProps<typeof StyledSpacer>
export type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>

export type SpacerProps = Props & NativeAttrs & SpacerVariantsProps
