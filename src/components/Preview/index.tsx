import * as S from './styles'
import Image from 'next/image'
import { colorsTuple, Palette } from 'components/Palette'
import { Button } from 'components/Button'
import { useCreatedStore } from '../../../lib/store'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Toast } from 'components/Toast'

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
    <S.Wrapper title="Preview">
      <Toaster
        position="top-right"
        reverseOrder={true}
        toastOptions={{
          style: {
            padding: '0rem',
            background: 'none',
            width: '12rem',
          },
        }}
      />
      <S.Buttons>
        <Button
          buttonType="primary"
          text="refresh"
          onClick={reset ? reset : undefined}
          fullWidth
        />
        <Button
          text="save"
          onClick={save}
          fullWidth
          buttonType="secondary"
          disabled={disable}
        />
      </S.Buttons>

      <S.ImageWrapper>
        <Image
          src={imageUrl!}
          height={800}
          width={800}
          alt={'album art'}
          layout="responsive"
        />
      </S.ImageWrapper>

      <Palette colors={colors as colorsTuple} />
    </S.Wrapper>
  )
}
