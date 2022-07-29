/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'

export const useMouseOver = () => {
  const [value, setValue] = React.useState(false)

  const ref = React.useRef(null)

  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)

  React.useEffect(
    () => {
      const node = ref.current as any
      if (node) {
        node.addEventListener('mouseover', handleMouseOver)
        node.addEventListener('mouseout', handleMouseOut)

        return () => {
          node.removeEventListener('mouseover', handleMouseOver)
          node.removeEventListener('mouseout', handleMouseOut)
        }
      }
    },
    [ref.current], // Recall only if ref changes
  )

  return [ref, value]
}
