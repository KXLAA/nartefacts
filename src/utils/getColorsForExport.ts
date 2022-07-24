import { ColorsTuple } from '@/components/palette'
import { getColorNames } from '@/utils'

export const getColorsForExport = (
  type: 'code' | 'css',
  colors: ColorsTuple,
) => {
  const formattedColors = getColorNames(colors)

  //CSS
  const CSS = formattedColors
    .map((color) => `--${color.name}: ${color.hex};`)
    .join('\n')
  const SCSS = formattedColors
    .map((color) => `$${color.name}: ${color.hex};`)
    .join('\n')

  const formattedCss = `/* CSS Variables */ \n:root {\n${CSS}\n}
      \n/* SCSS/SASS Variables */\n${SCSS}`

  //Code
  const ARRAY = JSON.stringify(
    formattedColors.map((color) => color.hex),
    null,
    2,
  )
  const OBJECT = JSON.stringify(
    formattedColors.reduce(
      (acc, color) => ({
        ...acc,
        [color.name]: color.hex,
      }),
      {},
    ),
  )

  const formattedCode = `// Array \n${ARRAY} \n\n// JSON Object \n${OBJECT}`

  return type === 'code' ? formattedCode : formattedCss
}
