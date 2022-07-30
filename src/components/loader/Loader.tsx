import { Flex } from '@/components/flex'

import { StyledLoaderGradient } from './loader.styles'

export const Loader = () => {
  return (
    <Flex direction="column" gap={2}>
      <StyledLoaderGradient />
      <StyledLoaderGradient />
    </Flex>
  )
}
