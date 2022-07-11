import { CSS, VariantProps } from '@/lib/stitches'

import { Flex } from '.'

export interface Props {
  css?: CSS
  as?: keyof Pick<JSX.IntrinsicElements, 'span' | 'div'>
}

export type FlexVariantsProps = VariantProps<typeof Flex>
export type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>
export type FlexProps = Props & NativeAttrs & FlexVariantsProps
