import { useState } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/Button'
import { Spacer } from '@/components/Common/Spacer'
import { Generated } from '@/components/Generated'
import { ColorsTuple } from '@/components/Palette'
import * as S from '@/components/Preview/styles'
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
      <S.Buttons>
        <Button
          label="Save"
          buttonType="primary"
          disabled={disable}
          width="full"
          onClick={save}
          fontSize="xl"
        />
        <Button
          label="Refresh"
          buttonType="secondary"
          width="full"
          onClick={reset ? reset : undefined}
          fontSize="xl"
        />
      </S.Buttons>
      <Spacer size="md" />

      <Generated imageUrl={imageUrl} colors={colors} />
    </S.Wrapper>
  )
}
