import { Flex } from '@/components/flex'
import { StyledLoaderGradient } from '@/components/loader/styles'

export const Loader = () => {
  return (
    <Flex direction="column" gap={2}>
      <StyledLoaderGradient />
      <StyledLoaderGradient />
    </Flex>
  )
}
