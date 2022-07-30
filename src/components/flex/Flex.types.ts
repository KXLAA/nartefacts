import { CSS, VariantProps } from '@/lib/stitches'

import { Flex } from './Flex'

export type FlexVariantsProps = VariantProps<typeof Flex>
export interface FlexProps extends FlexVariantsProps {
  css?: CSS
  as?: keyof Pick<JSX.IntrinsicElements, 'span' | 'div'>
}
