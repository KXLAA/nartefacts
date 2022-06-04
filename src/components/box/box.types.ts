import { CSS, VariantProps } from '@/lib/stitches'

import { Box } from '.'

export interface Props {
  css?: CSS
  as?: keyof Pick<JSX.IntrinsicElements, 'span' | 'div'>
}

export type BoxVariantsProps = VariantProps<typeof Box>
export type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>
export type BoxProps = Props & NativeAttrs & BoxVariantsProps
