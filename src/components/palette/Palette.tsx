import toast from 'react-hot-toast'

import { useAutoAnimate, useCopyToClipboard, useMouseOver } from '@/lib/hooks'

import { StyledColor, StyledPalette } from './styles'
import { ColorBoxProps, PalletteProps } from './types'

export const ColorBox = ({ color, small }: ColorBoxProps) => {
  const [, copy] = useCopyToClipboard()
  const [hoverRef, isHovered] = useMouseOver()

  const copyToClipboard = (color: string) => {
    copy(color)
    toast(`Copied ${color}`)
  }

  return (
    <StyledColor
      small={small}
      ref={hoverRef as any}
      css={{
        backgroundColor: color.match(
          /^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i,
        )
          ? color
          : '#202020',
      }}
      onClick={() => copyToClipboard(color)}
      data-testid="color-box"
    >
      <span>{isHovered && `COPY`}</span>
    </StyledColor>
  )
}

export const Palette = ({ colors, small }: PalletteProps) => {
  const [parent] = useAutoAnimate()
  colors?.forEach((color, index) => {
    if (!color.match(/^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i)) {
      console.warn(
        `Invalid color ${color} at index ${index} in Palette component.`,
      )
    }
  })

  return (
    <StyledPalette
      small={small}
      ref={parent as React.RefObject<HTMLDivElement>}
    >
      {colors?.slice(small ? 4 : undefined).map((color) => (
        <ColorBox key={color} color={color} small={small} />
      ))}
    </StyledPalette>
  )
}
