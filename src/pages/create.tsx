import * as Layout from 'components/common/Layout'
import { Header } from 'components/Header'
import { Title } from 'components/Title'
import { Dropzone } from 'components/Dropzone'
import { useState } from 'react'
import { Palette } from 'components/Palette'

export default function Create() {
  const [imageUrl, setImageUrl] = useState<undefined | string>()
  const [colors, setColors] = useState<string[] | null | undefined>([])
  const [loading, setLoading] = useState<boolean>(false)

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
          loading={loading}
          setLoading={setLoading}
          setColors={setColors}
          setImageUrl={setImageUrl}
        />
      ) : (
        <Palette colors={colors as string[]} />
      )}
    </Layout.Main>
  )
}
