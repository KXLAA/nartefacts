/* istanbul ignore file */

import * as React from 'react'

import { StyledSpacer } from './spacer.styles'
import { SpacerProps } from './spacer.types'

export const Spacer = ({ axis, size, css, ...props }: SpacerProps) => {
  const width = axis === 'vertical' ? 0 : size //left to right
  const height = axis === 'horizontal' ? 0 : size // top to bottom

  return (
    <StyledSpacer
      width={width}
      height={height}
      aria-hidden="true"
      css={css as any}
      {...props}
    />
  )
}
