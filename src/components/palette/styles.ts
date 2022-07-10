import { Box } from '@/components/box'
import { styled } from '@/lib/stitches'

export const StyledColor = styled(Box, {
  height: '130px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: '$rounded',
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
