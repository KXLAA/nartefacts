import { Flex } from '@/components/flex'
import { StyledLoaderGradient } from '@/components/loader/styles'
import { LoaderProps } from '@/components/loader/types'

export const Loader: React.FC<LoaderProps> = () => {
  return (
    <Flex direction="column" gap={2}>
      <StyledLoaderGradient />
      <StyledLoaderGradient />
    </Flex>
  )
}
