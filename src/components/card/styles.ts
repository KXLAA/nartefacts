import { Box } from '@/components/box'
import { styled } from '@/lib/stitches'

export const Gradient = styled(Box, {
  background: `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  )`,
  borderRadius: '$rounded',
  height: '$32',
  border: 'solid 2px $gray-base',
})

export const ImageWrapper = styled(Box, {
  border: 'solid 2px $gray-base',
  borderRadius: '$rounded',
  '& span': {
    borderRadius: '$rounded',
  },
})
