/* eslint-disable @typescript-eslint/no-unused-vars */
/* istanbul ignore file */

import * as React from 'react'

import { StyledSpacer } from './styles'
import { SpacerProps } from './types'

export const Spacer = ({ axis, size, css, ...props }: SpacerProps) => {
  const width = axis === 'vertical' ? 0 : size //left to right
  const height = axis === 'horizontal' ? 0 : size // top to bottom

  return (
    <StyledSpacer width={width} height={height} aria-hidden="true" {...props} />
  )
}
