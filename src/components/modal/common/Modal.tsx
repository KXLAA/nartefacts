import * as ModalPrimitive from '@radix-ui/react-dialog'
import React from 'react'

import { ModalRoot, ModalTrigger, StyledContent, StyledOverlay } from './styles'
import { ModalProps } from './types'

const ModalContent = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children, ...props }, forwardedRef) => (
  <ModalPrimitive.Portal>
    <StyledOverlay />
    <StyledContent {...props} ref={forwardedRef}>
      {children}
    </StyledContent>
  </ModalPrimitive.Portal>
))

export const Modal = ({ children, trigger, ...props }: ModalProps) => {
  return (
    <ModalRoot {...props}>
      <ModalTrigger asChild>{trigger}</ModalTrigger>
      <ModalContent>{children}</ModalContent>
    </ModalRoot>
  )
}

ModalContent.displayName = 'ModalContent'
