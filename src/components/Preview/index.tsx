import * as S from '@/components/Preview/styles'
import Image from 'next/image'
import { colorsTuple, Palette } from '@/components/Palette'
import { Button } from '@/components/Button'
import { useCreatedStore } from '@/lib/store'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Toast } from '@/components/Toast'

export type PreviewProps = {
  heading?: string
  imageUrl: string
  reset?: () => void
  colors: colorsTuple
}

export const Preview: React.FC<PreviewProps> = ({
  imageUrl,
  colors,
  reset,
}) => {
  const store = useCreatedStore()
  const [disable, setDisable] = useState<boolean>(false)

  const save = () => {
    setDisable(true)
    store.addGeneratedColor(imageUrl, colors)
    toast(() => <Toast imageUrl={imageUrl} />)
  }

  return (
    <S.Wrapper data-testid="Preview">
      <S.Buttons>
        <Button
          label="save"
          buttonType="primary"
          onClick={save}
          width="full"
          disabled={disable}
        />
        <Button
          label="refresh"
          width="full"
          buttonType="secondary"
          onClick={reset ? reset : undefined}
        />
      </S.Buttons>

      <S.ImageWrapper>
        <Image
          src={imageUrl!}
          height={800}
          width={800}
          alt={'user uploaded image'}
          layout="responsive"
        />
      </S.ImageWrapper>

      <Palette colors={colors as colorsTuple} />
    </S.Wrapper>
  )
}
