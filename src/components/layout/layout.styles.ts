/* istanbul ignore file */

import { styled } from '@/lib/stitches'

export const StyledLayout = styled('main', {
  width: '100%',
  margin: '0 auto',
  py: '$5',
  px: '$4',
  '@md': {
    py: '$10',
    px: '$8',
  },

  variants: {
    size: {
      sm: {
        maxWidth: '400px',
      },
      md: {
        maxWidth: '800px',
      },
      lg: {
        maxWidth: '1280px',
      },
      xl: {
        maxWidth: '1300px',
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})
