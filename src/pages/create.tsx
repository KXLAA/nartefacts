import * as Layout from 'components/common/Layout'
import { Header } from 'components/Header'
import { Title } from 'components/Title'
import { Dropzone } from 'components/Dropzone'
import { useState } from 'react'
import { colorsTuple } from 'components/Palette'
import { Preview } from 'components/Preview'
import { Counter } from 'components/Counter'
import { useAnalyticsQuery } from '../../graphql/generated/graphql'

export default function Create() {
  const [imageUrl, setImageUrl] = useState<null | string>(null)
  const [colors, setColors] = useState<colorsTuple | null>(
    [] as unknown as colorsTuple,
  )
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const { data: count } = useAnalyticsQuery()

  const reset = () => {
    setImageUrl(null)
    setColors(null)
    setLoading(false)
  }

  return (
    <Layout.Main>
      <Header secondary />
      <Title
        title="create"
        description="Generate color pallettes or gradients from your own images "
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
      ) : null}
      {colors && imageUrl ? (
        <Preview
          imageUrl={imageUrl}
          colors={colors as colorsTuple}
          reset={reset}
        />
      ) : null}

      <Counter count={count?.analytics[0]?.generatedPalettes} />
    </Layout.Main>
  )
}
