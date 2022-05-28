import { styled } from '@/lib/stitches.config'

export const StyledButton = styled('button', {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',

  // Custom reset?
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  border: 'none',

  // Custom
  width: '100%',
  px: '$4',
  fontFamily: '$primary',
  fontWeight: 'bold',
  fontVariantNumeric: 'tabular-nums',
  br: '$rounded',
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
      sm: {
        height: '$8',
        maxWidth: '$40',
        fontSize: 'md',
      },
      md: {
        height: '$16',
        maxWidth: '$64',
        width: '100%',
        fontSize: '$xl',
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
        maxWidth: '100%',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
    variant: 'light',
    fullWidth: false,
  },
})
