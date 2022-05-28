import * as React from 'react'

import { StyledButton } from '@/components/Button/styles'
import { ButtonProps } from '@/components/Button/types'

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const { label = 'Button', css, ...buttonProps } = props
    return (
      <StyledButton
        {...buttonProps}
        ref={forwardedRef}
        css={{ ...(css as any) }}
      >
        {label}
      </StyledButton>
    )
  },
)

Button.displayName = 'Button'
