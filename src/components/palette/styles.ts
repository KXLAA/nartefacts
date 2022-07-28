import { Box } from '@/components/box'
import { styled } from '@/lib/stitches'

export const StyledPalette = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '$2',

  variants: {
    small: {
      true: {
        gap: '$1',
      },
    },
  },
})

export const StyledColor = styled(Box, {
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  background: '$black-light',
  ':hover': {
    filter: 'brightness(150%)',
  },
  '& span': {
    fontWeight: 'bold',
    fontSize: '$lg',
    color: '$white-base',
  },

  variants: {
    small: {
      true: {
        height: 58,
        borderRadius: '$rounded-sm',

        '& span': {
          fontSize: 12,
          color: '$white-base',
        },
      },
    },
  },
})
