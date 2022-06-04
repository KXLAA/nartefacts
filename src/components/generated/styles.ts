import { styled } from '@/lib/stitches'

export const StyledImageWrapper = styled('div', {
  border: '2px solid $gray-light',
  borderRadius: '$rounded',

  '& span': {
    borderRadius: '$rounded',
  },

  variants: {
    small: {
      true: {
        border: '1px solid $gray-light',
        borderRadius: '$rounded-sm',

        '& span': {
          borderRadius: '$rounded-sm',
        },
      },
    },
  },
})
