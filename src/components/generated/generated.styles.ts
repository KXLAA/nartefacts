import { Box } from '@/components/box'
import { keyframes, styled } from '@/lib/stitches'

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const StyledImageWrapper = styled('div', {
  '& span': {
    br: 4,
    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${fadeIn} 1s ease-in`,
      br: 4,
    },
  },

  variants: {
    small: {
      true: {
        br: 2,

        '& span': {
          br: 2,
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
