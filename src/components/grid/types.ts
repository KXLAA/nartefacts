import { CSS, VariantProps } from '@/lib/stitches'

import { Grid } from './grid'

export interface Props {
  css?: CSS
  as?: keyof Pick<JSX.IntrinsicElements, 'span' | 'div'>
}

export type GridVariantsProps = VariantProps<typeof Grid>
export type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>
export type GridProps = Props & NativeAttrs & GridVariantsProps
