import { useState } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/button'
import { Flex } from '@/components/flex'
import { Generated } from '@/components/generated'
import { Spacer } from '@/components/spacer'
import { Toast } from '@/components/toast'
import { useCreatedStore } from '@/lib/store'

import { StyledWrapper } from './styles'
import { PreviewProps } from './types'

export const Preview: React.FC<PreviewProps> = ({
  imageUrl,
  colors,
  reset,
}) => {
  const store = useCreatedStore()
  const [disable, setDisable] = useState<boolean>(!colors)

  const save = () => {
    setDisable(true)
    if (colors && imageUrl) store.addGeneratedColor(imageUrl, colors)
    toast(() => <Toast imageUrl={imageUrl} />)
  }

  return (
    <StyledWrapper data-testid="Preview">
      <Flex gap={4}>
        <Button label="Save" disabled={disable} onClick={save} fullWidth />

        <Button
          variant="dark"
          label="Refresh"
          onClick={reset ? reset : undefined}
          fullWidth
        />
      </Flex>
      <Spacer size="4" />
      <Generated imageUrl={imageUrl} colors={colors} />
    </StyledWrapper>
  )
}
