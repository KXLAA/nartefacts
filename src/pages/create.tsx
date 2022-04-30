import * as Layout from 'components/common/Layout'
import { Header } from 'components/Header'
import { Title } from 'components/Title'
import { Dropzone } from 'components/Dropzone'
import { useState } from 'react'
import { Palette } from 'components/Palette'
import Image from 'next/image'

export default function Create() {
  const [imageUrl, setImageUrl] = useState<undefined | string>()
  const [colors, setColors] = useState<string[] | null | undefined>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  return (
    <Layout.Main>
      <Header secondary />
      <Title
        title="create"
        description="Generate color pallettes or gradients 
from your own images "
      />

      {!imageUrl ? (
        <Dropzone
          setError={setError}
          error={error}
          loading={loading}
          setLoading={setLoading}
          setColors={setColors}
          setImageUrl={setImageUrl}
        />
      ) : (
        <>
          <Image src={imageUrl!} height={800} width={800} alt={'album art'} />
          <Palette colors={colors as string[]} />
        </>
      )}
    </Layout.Main>
  )
}
