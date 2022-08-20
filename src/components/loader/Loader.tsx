import { Flex } from '@/components/flex'

import { StyledLoaderGradient } from './loader.styles'

export const Loader = () => {
  return (
    <Flex direction="column" gap={2} data-testid="loader">
      <StyledLoaderGradient />
      <StyledLoaderGradient />
    </Flex>
  )
}
