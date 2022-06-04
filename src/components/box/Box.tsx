import { BASE_VARIANTS, COLOR_VARIANTS, styled } from '@/lib/stitches'

export const Box = styled('div', {
  variants: {
    ...BASE_VARIANTS,
    ...COLOR_VARIANTS,
  },
})
