import { Box } from '@/components/box'
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

export const StyledWrapper = styled(Box, {
  width: '100%',
  margin: ' 0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  variants: {
    small: {
      true: {
        gap: '$2',
      },
    },
  },
})
