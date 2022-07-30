import * as React from 'react'

export const useDrag = () => {
  const [clicked, setClicked] = React.useState(false)
  const [dragging, setDragging] = React.useState(false)
  const position = React.useRef(0)

  const dragStart = React.useCallback((event: React.MouseEvent) => {
    position.current = event.clientX
    setClicked(true)
  }, [])

  const dragStop = React.useCallback(
    () =>
      window.requestAnimationFrame(() => {
        setDragging(false)
        setClicked(false)
      }),
    [],
  )

  const dragMove = (event: React.MouseEvent, cb: (posDif: number) => void) => {
    const newDiff = position.current - event.clientX

    const movedEnough = Math.abs(newDiff) > 5

    if (clicked && movedEnough) {
      setDragging(true)
    }

    if (dragging && movedEnough) {
      position.current = event.clientX
      cb(newDiff)
    }
  }

  return {
    dragStart,
    dragStop,
    dragMove,
    dragging,
    position,
    setDragging,
  }
}
