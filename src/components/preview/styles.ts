import { Box } from '@/components/box'
import { keyframes, styled } from '@/lib/stitches'

const fadeIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-20px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const StyledWrapper = styled(Box, {
  width: '100%',
  margin: ' 0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${fadeIn} 1s ease-in`,
  },
})
