import { GetColorName } from 'hex-color-to-color-name'

import { ColorsTuple } from '@/components/palette'

export const getColorNames = (colors: ColorsTuple) => {
  const colorNames = colors?.map((color) => {
    const colorName = GetColorName(color).toLowerCase().replace(/\s/g, '-')
    return {
      hex: color,
      name: colorName,
    }
  })
  return colorNames
}
