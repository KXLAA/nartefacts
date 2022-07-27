import { ColorsTuple } from '@/components/palette'

export type PreviewProps = {
  imageUrl: string
  reset?: () => void
  colors: ColorsTuple
}
