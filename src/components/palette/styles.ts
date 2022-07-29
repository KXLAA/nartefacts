import { Box } from '@/components/box'
import { styled } from '@/lib/stitches'

export const StyledPalette = styled('div', {
  '&:first-child': {
    ml: 0,
  },
})

export const StyledColor = styled(Box, {
  mr: '$3',
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
    size: {
      sm: {
        size: 58,
        mr: '$2',
        '& span': {
          fontSize: 12,
          color: '$white-base',
        },
      },
      md: {
        size: 100,
        '& span': {
          fontSize: 12,
          color: '$white-base',
        },
      },
      lg: {
        size: 160,
        '& span': {
          fontSize: 12,
          color: '$white-base',
        },
      },
    },
    small: {
      true: {},
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
