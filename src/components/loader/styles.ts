import { Box } from '@/components/box'
import { keyframes, styled } from '@/lib/stitches'

const gradientAnimation = keyframes({
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' },
})

export const StyledLoaderGradient = styled(Box, {
  background: `linear-gradient(
        147deg,
        #f098b9,
        #eedd67,
        #d82259,
        #161616,
        #0485e5,
        #065b2c,
        #b7281f,
        #943d3f,
        #0e118c,
        #1dc395,
        #0e7790
      )`,
  backgroundSize: '540% 540%',
  height: '$2',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${gradientAnimation} 15s ease infinite`,
  },
})
