import { Box } from '@/components/box'
import { styled } from '@/lib/stitches'

export const StyledTable = styled('table', {
  borderCollapse: 'collapse',
  overflow: 'hidden',
  width: '100%',
  textAlign: 'center',
  p: 10,
})

export const TH = styled('th', {
  bg: '$black-light',
  border: '3px solid $gray-base',
  p: 10,
})

export const TR = styled('tr', {
  border: '3px solid $gray-base',
})

export const TD = styled('td', {
  border: '3px solid $gray-base',
})

export const TableHeader = styled('thead', {})

export const ImageWrapper = styled(Box, {
  br: 9999,

  variants: {
    rounded: {
      true: {
        '& span': {
          br: 9999,
        },
      },
    },
  },
})

export const ArtistCell = styled(Box, {})
