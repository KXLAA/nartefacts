import autoAnimate from '@formkit/auto-animate'
import * as React from 'react'

export function useAutoAnimate() {
  const parent: React.RefObject<HTMLElement | null> = React.useRef(null)
  React.useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return [parent]
}
