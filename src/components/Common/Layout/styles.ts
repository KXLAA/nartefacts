/* istanbul ignore file */

import { styled } from '@/lib/stitches.config'

export const StyledLayout = styled('main', {
  width: '100%',
  margin: '0 auto',

  variants: {
    size: {
      sm: {
        maxWidth: '400px',
        py: '$10',
        px: '$8',
      },
      md: {
        maxWidth: '800px',
        py: '$10',
        px: '$8',
      },
      lg: {
        maxWidth: '1280px',
        py: '$10',
        px: '$8',
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})

export const Grid = styled('div', {
  boxSizing: 'border-box',
  display: 'grid',
  width: '100%',

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
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },
    gap: {
      1: {
        gap: '$1',
      },
      2: {
        gap: '$2',
      },
      3: {
        gap: '$3',
      },
      4: {
        gap: '$4',
      },
      5: {
        gap: '$5',
      },
      6: {
        gap: '$6',
      },
      7: {
        gap: '$8',
      },
      8: {
        gap: '$10',
      },
      9: {
        gap: '$12',
      },
    },
    gapX: {
      1: {
        columnGap: '$1',
      },
      2: {
        columnGap: '$2',
      },
      3: {
        columnGap: '$3',
      },
      4: {
        columnGap: '$4',
      },
      5: {
        columnGap: '$5',
      },
      6: {
        columnGap: '$6',
      },
      7: {
        columnGap: '$8',
      },
      8: {
        columnGap: '$10',
      },
      9: {
        columnGap: '$12',
      },
    },
    gapY: {
      1: {
        rowGap: '$1',
      },
      2: {
        rowGap: '$2',
      },
      3: {
        rowGap: '$3',
      },
      4: {
        rowGap: '$4',
      },
      5: {
        rowGap: '$5',
      },
      6: {
        rowGap: '$6',
      },
      7: {
        rowGap: '$8',
      },
      8: {
        rowGap: '$10',
      },
      9: {
        rowGap: '$12',
      },
    },
  },
  defaultVariants: {
    gap: 4,
  },
})
