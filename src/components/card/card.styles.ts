import { Box } from '@/components/box'
import { keyframes, styled } from '@/lib/stitches'

const gradientAnimation = keyframes({
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' },
})

export const Divider = styled(Box, {
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
  height: '$1',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${gradientAnimation} 15s ease infinite`,
  },
})

export const ImageWrapper = styled(Box, {})

export const Content = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  bg: '$black-light',
  padding: '$1',
  borderRadius: '$rounded',
  textAlign: 'center',
  '& span': {
    fontSize: 18,
  },
})
