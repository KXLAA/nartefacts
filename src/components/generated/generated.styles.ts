import { Box } from '@/components/box'
import { keyframes, styled } from '@/lib/stitches'

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const StyledImageWrapper = styled('div', {
  border: '2px solid $gray-light',
  borderRadius: '$rounded',

  '& span': {
    borderRadius: '$rounded',
    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${fadeIn} 1s ease-in`,
    },
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
