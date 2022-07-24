import { ColorsTuple } from '@/components/palette'

export type PreviewProps = {
  heading?: string
  imageUrl: string
  reset?: () => void
  colors: ColorsTuple
  small?: boolean
}
