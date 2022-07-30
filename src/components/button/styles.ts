import { styled } from '@/lib/stitches'

export const StyledButton = styled('button', {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  border: 'none',

  // Custom
  px: '$4',
  fontFamily: '$primary',
  fontWeight: 'bold',
  fontVariantNumeric: 'tabular-nums',
  br: 4,
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  '&:disabled, &:disabled:hover, &:disabled:active': {
    boxShadow: 'inset 0 0 100px 100px rgba(255, 255, 255, 0.1)',
    pointerEvents: 'none',
    cursor: ' not-allowed',
  },

  '&:hover': {
    boxShadow: 'inset 0 0 100px 100px rgba(255, 255, 255, 0.1)',
  },

  variants: {
    size: {
      xs: {
        height: '$8',
        maxWidth: '100%',
        fontSize: '$md',
      },
      sm: {
        height: '$10',
        maxWidth: '100%',
        fontSize: '22px',
      },
      md: {
        height: '$16',
        maxWidth: '$64',
        fontSize: '28px',
      },
      lg: {
        height: '$20',
        maxWidth: '$72',
        fontSize: '$xl',
      },
    },
    variant: {
      dark: {
        bg: '$black-light',
        color: '$gray-light',
      },
      light: {
        bg: '$gray-light',
        color: '$black-light',
      },
      danger: {
        bg: '$red-base',
        color: '$white-base',
      },
    },
    fullWidth: {
      true: {
        width: '100% !important',
        maxWidth: '100% !important',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
    variant: 'light',
    fullWidth: true,
  },
})
