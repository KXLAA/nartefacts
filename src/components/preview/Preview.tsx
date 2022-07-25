import * as React from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/button'
import { Flex } from '@/components/flex'
import { Generated } from '@/components/generated'
import { Toast } from '@/components/toast'
import { useCreatedStore } from '@/lib/store'

import { StyledWrapper } from './styles'
import { PreviewProps } from './types'

export const Preview = ({ imageUrl, colors, reset }: PreviewProps) => {
  const store = useCreatedStore()
  const [disable, setDisable] = React.useState<boolean>(false)

  const save = () => {
    setDisable(true)
    if (colors && imageUrl) store.addGeneratedColor(imageUrl, colors)
    toast(() => <Toast imageUrl={imageUrl} />)
  }

  return (
    <StyledWrapper data-testid="Preview">
      <Flex gap={3}>
        <Button
          label="save"
          disabled={disable}
          onClick={save}
          size={{
            '@initial': 'sm',
            '@md': 'md',
          }}
          fullWidth
        />

        <Button
          variant="danger"
          label="reset"
          onClick={reset ? reset : undefined}
          size={{
            '@initial': 'sm',
            '@md': 'md',
          }}
          fullWidth
        />
      </Flex>
      <Generated imageUrl={imageUrl} colors={colors} />
    </StyledWrapper>
  )
}
