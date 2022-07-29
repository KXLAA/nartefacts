import * as React from 'react'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import toast from 'react-hot-toast'

import {
  useAutoAnimate,
  useCopyToClipboard,
  useDrag,
  useMouseOver,
} from '@/lib/hooks'
import { isValidHexCode } from '@/utils'

import { StyledColor } from './styles'
import { ColorBoxProps, PalletteProps, VisibilityApiType } from './types'

export const ColorBox = ({ color, size }: ColorBoxProps) => {
  const [, copy] = useCopyToClipboard()
  const [hoverRef, isHovered] = useMouseOver()

  const copyToClipboard = (color: string) => {
    copy(color)
    toast(`Copied ${color}`)
  }

  return (
    <StyledColor
      size={size}
      ref={hoverRef as any}
      css={{
        //check if the color hex code is valid
        bg: color.match(isValidHexCode) ? color : '#202020',
      }}
      onClick={() => copyToClipboard(color)}
      data-testid="color-box"
    >
      <span>{isHovered && `COPY`}</span>
    </StyledColor>
  )
}

export const Palette = ({ colors, size }: PalletteProps) => {
  const [parent] = useAutoAnimate()
  const { dragStart, dragStop, dragMove } = useDrag()

  const handleDrag =
    ({ scrollContainer }: VisibilityApiType) =>
    (event: React.MouseEvent) =>
      dragMove(event, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff
        }
      })

  const onWheel = (apiObj: VisibilityApiType, ev: React.WheelEvent): void => {
    const isTouchPad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15

    if (isTouchPad) {
      ev.stopPropagation()
      return
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext()
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev()
    }
  }

  colors?.forEach((color, index) => {
    if (!color.match(/^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i)) {
      console.warn(
        `Invalid color ${color} at index ${index} in Palette component.`,
      )
    }
  })

  return (
    <div
      onMouseLeave={dragStop}
      ref={parent as React.RefObject<HTMLDivElement>}
    >
      <ScrollMenu
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
        onWheel={onWheel}
      >
        {colors?.map((color) => (
          <ColorBox key={color} color={color} size={size} />
        ))}
      </ScrollMenu>
    </div>
  )
}
