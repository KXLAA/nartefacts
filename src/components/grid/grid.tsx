import { Box } from '@/components/box'
import { createScaleVariant, styled } from '@/lib/stitches'

export const Grid = styled(Box, {
  boxSizing: 'border-box',
  display: 'grid',
  width: '100%',
  height: 'inherit',

  variants: {
    align: {
      start: {
        alignItems: 'start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    flow: {
      row: {
        gridAutoFlow: 'row',
      },
      column: {
        gridAutoFlow: 'column',
      },
      dense: {
        gridAutoFlow: 'dense',
      },
      rowDense: {
        gridAutoFlow: 'row dense',
      },
      columnDense: {
        gridAutoFlow: 'column dense',
      },
    },
    columns: {
      1: {
        gridTemplateColumns: 'repeat(1,  1fr)',
      },
      2: {
        gridTemplateColumns: 'repeat(2,  1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      5: {
        gridTemplateColumns: 'repeat(5, 1fr)',
      },
      6: {
        gridTemplateColumns: 'repeat(6, 1fr)',
      },
      7: {
        gridTemplateColumns: 'repeat(7, 1fr)',
      },
      8: {
        gridTemplateColumns: 'repeat(8, 1fr)',
      },
    },

    rows: {
      1: {
        gridTemplateRows: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateRows: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateRows: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateRows: 'repeat(4, 1fr)',
      },
      5: {
        gridTemplateRows: 'repeat(5, 1fr)',
      },
      6: {
        gridTemplateRows: 'repeat(6, 1fr)',
      },
      none: {
        gridTemplateRows: 'none',
      },
    },
    gap: createScaleVariant('space', (token) => ({ gap: token })),
    columnGap: createScaleVariant('space', (token) => ({ columnGap: token })),
    rowGap: createScaleVariant('space', (token) => ({ rowGap: token })),
  },
})
