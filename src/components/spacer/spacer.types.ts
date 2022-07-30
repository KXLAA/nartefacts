import { CSS, SizeTypes, VariantProps } from '@/lib/stitches'

import { StyledSpacer } from './spacer.styles'

export interface Props {
  css?: CSS
  size?: SizeTypes
  axis?: string
  as?: keyof Pick<JSX.IntrinsicElements, 'span' | 'div'>
}
export type SpacerVariantsProps = VariantProps<typeof StyledSpacer>
export type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>

export type SpacerProps = Props & NativeAttrs & SpacerVariantsProps
