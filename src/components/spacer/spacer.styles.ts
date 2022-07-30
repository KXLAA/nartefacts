/* istanbul ignore file */

import { createScaleVariant, styled } from '@/lib/stitches'

export const StyledSpacer = styled('span', {
  display: 'block',

  variants: {
    width: createScaleVariant('sizes', (token) => ({
      width: token,
      minWidth: token,
    })),
    height: createScaleVariant('sizes', (token) => ({
      height: token,
      minHeight: token,
    })),
  },
})
