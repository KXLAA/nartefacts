import { CSS, VariantProps } from '@/lib/stitches'

import { Grid } from './Grid'

export type GridVariantsProps = VariantProps<typeof Grid>
export interface GridProps extends GridVariantsProps {
  css?: CSS
  as?: keyof Pick<JSX.IntrinsicElements, 'span' | 'div'>
}
