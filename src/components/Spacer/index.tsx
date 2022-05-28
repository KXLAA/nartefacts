import * as React from 'react'

import { StyledSpacer } from './Spacer.styles'
import { SpacerProps } from './Spacer.types'

export const Spacer: React.FC<SpacerProps> = ({
  vertical,
  horizontal,
  css,
  ...props
}) => {
  return (
    <StyledSpacer
      css={{
        ml: `$${vertical} !important`,
        mt: `$${horizontal} !important`,
        ...(css as any),
      }}
      aria-hidden="true"
      {...props}
    />
  )
}
