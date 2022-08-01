import * as DialogPrimitive from '@radix-ui/react-dialog'

import { keyframes, styled } from '@/lib/stitches'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const StyledOverlay = styled(DialogPrimitive.Overlay, {
  bg: 'rgba(19, 19, 19, 0.7)',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
})

export const StyledTrigger = styled(DialogPrimitive.Trigger, {
  all: 'unset',
  width: '100%',
  cursor: 'pointer',
})

export const StyledContent = styled(DialogPrimitive.Content, {
  bg: '$black-light',
  br: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: '$8',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  '&:focus': { outline: 'none' },
})

const StyledTitle = styled(DialogPrimitive.Title, {
  textAlign: 'center',

  variants: {
    size: {
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
    },
  },
})

const StyledDescription = styled(DialogPrimitive.Description, {
  fontSize: '$base',
  textAlign: 'center',
  mb: 24,
})

export const IconContainer = styled('div', {
  bg: '$gray-base',
  p: '$4',
  br: 8,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Container = styled('div', {
  bg: '$gray-base',
  p: '$4',
  br: 8,
})

export const ModalRoot = DialogPrimitive.Root
export const ModalTrigger = DialogPrimitive.Trigger
export const ModalTitle = StyledTitle
export const ModalDescription = StyledDescription
export const ModalClose = DialogPrimitive.Close
