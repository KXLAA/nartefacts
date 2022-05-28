import { useState } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/Button'
import { Flex } from '@/components/Flex'
import { Generated } from '@/components/Generated'
import { ColorsTuple } from '@/components/Palette'
import * as S from '@/components/Preview/styles'
import { Spacer } from '@/components/Spacer'
import { Toast } from '@/components/Toast'
import { useCreatedStore } from '@/lib/store'

export type PreviewProps = {
  heading?: string
  imageUrl: string
  reset?: () => void
  colors: ColorsTuple
}

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
    <S.Wrapper data-testid="Preview">
      <Flex gap={4}>
        <Button label="Save" disabled={disable} onClick={save} fullWidth />

        <Button
          variant="dark"
          label="Refresh"
          onClick={reset ? reset : undefined}
          fullWidth
        />
      </Flex>
      <Spacer horizontal={4} />
      <Generated imageUrl={imageUrl} colors={colors} />
    </S.Wrapper>
  )
}
