/* istanbul ignore file */

import { CSS as StitchesCSS } from '@stitches/react'
import { Prefixed } from '@stitches/react/types/util'

import { config, theme } from '@/lib/stitches'

export type Theme = typeof theme
export type CSS = StitchesCSS<typeof config>
export type { VariantProps } from '@stitches/react'
export type ColorTypes = keyof typeof theme.colors
export type FontTypes = keyof typeof theme.fonts
export type FontWeightTypes = keyof typeof theme.fontWeights
export type FontSizeTypes = keyof typeof theme.fontSizes
export type LineHeightTypes = keyof typeof theme.lineHeights
export type SpaceTypes = keyof typeof theme.space
export type SizeTypes = keyof typeof theme.sizes
export type RadiiTypes = keyof typeof theme.radii
export type ThemeProps =
  | SpaceTypes
  | ColorTypes
  | FontTypes
  | FontWeightTypes
  | FontSizeTypes
  | LineHeightTypes
  | RadiiTypes
  | SizeTypes

/* Types for defined tokens in theme in stitches config eg "$base-white" */
export type TokenByScaleName<ScaleName extends keyof Theme> = Prefixed<
  '$',
  keyof Theme[ScaleName]
>

/* Types for token names mapped to CSS property names eg { fontSize:" $sm" } */
export type ScaleVariant<ScaleName extends keyof Theme> = Record<
  keyof Theme[ScaleName],
  CSS
>

/* Types for function to get CSS styles */
export type GetCss<ScaleName extends keyof Theme> = (
  token: TokenByScaleName<ScaleName>,
) => CSS
