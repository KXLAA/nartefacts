import { VisibilityContext } from 'react-horizontal-scrolling-menu'

import { VariantProps } from '@/lib/stitches'

import { StyledColor } from './styles'

type ColorVariantsProps = VariantProps<typeof StyledColor>
export type VisibilityApiType = React.ContextType<typeof VisibilityContext>

export interface PalletteProps extends ColorVariantsProps {
  colors: string[]
}

export interface ColorBoxProps extends ColorVariantsProps {
  color: string
}

export type ColorsTuple = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
]
