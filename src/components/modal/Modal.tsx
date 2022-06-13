import * as ModalPrimitive from '@radix-ui/react-dialog'
import React from 'react'

import { StyledContent, StyledOverlay } from './styles'

export const ModalContent = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children, ...props }, forwardedRef) => (
  <ModalPrimitive.Portal>
    <StyledOverlay />
    <StyledContent {...props} ref={forwardedRef}>
      {children}
      <ModalPrimitive.Close>{/* <Cross1Icon /> */}</ModalPrimitive.Close>
    </StyledContent>
  </ModalPrimitive.Portal>
))

ModalContent.displayName = 'ModalContent'
export const Modal = ModalPrimitive.Root
