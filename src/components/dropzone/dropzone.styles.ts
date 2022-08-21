import { Box } from '@/components/box'
import { styled } from '@/lib/stitches'

export const StyledDrop = styled('div', {
  bg: '$black-light',
  border: '1.5px dashed $gray-base',
  br: '$rounded',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    bg: '$white-base',
    transform: 'translateX(0rem) translateY(0.125rem)',
  },

  variants: {
    active: {
      true: {
        bg: '$white-base',
      },
    },
    size: {
      sm: {
        w: '100%',
        h: 440,
      },
      md: {
        w: '100%',
        h: 440,
      },
      lg: {
        w: '100%',
        h: 800,
      },
    },
  },
})

export const StyledContent = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100%',
  '& p': {
    fontSize: '$lg',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '$gray-light',
  },
})
