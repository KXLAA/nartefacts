import * as Layout from 'components/common/Layout'
import { Header } from 'components/Header'
import { Title } from 'components/Title'
import { Dropzone } from 'components/Dropzone'
import { useState } from 'react'
import { Palette } from 'components/Palette'
import Image from 'next/image'
import { colorsTuple } from 'components/Palette'

export default function Create() {
  const [imageUrl, setImageUrl] = useState<undefined | string>()
  const [colors, setColors] = useState<colorsTuple | null | undefined>(
    [] as unknown as colorsTuple,
  )
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  console.log(colors)

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
          <Palette colors={colors as colorsTuple} />
        </>
      )}
    </Layout.Main>
  )
}
