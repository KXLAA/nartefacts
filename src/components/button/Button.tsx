import * as React from 'react'

import { StyledButton } from './button.styles'
import { ButtonProps } from './button.types'

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const { label = 'Button', css, size, fullWidth, ...buttonProps } = props
    return (
      <StyledButton
        size={size}
        fullWidth={fullWidth}
        ref={forwardedRef}
        css={{ ...(css as any) }}
        {...buttonProps}
      >
        {label}
      </StyledButton>
    )
  },
)

Button.displayName = 'Button'
