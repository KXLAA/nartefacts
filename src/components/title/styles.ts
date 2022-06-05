/* istanbul ignore file */

import { Box } from '@/components/box'
import { styled } from '@/lib/stitches'

export const StyledWrapper = styled(Box, {
  width: '100%',
  backgroundColor: '$black-light',
  padding: '$6',
  borderRadius: '$rounded',
  textAlign: 'center',
  fontWeight: 'bold',
})
