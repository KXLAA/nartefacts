import * as Layout from 'components/common/Layout'
import { Header } from 'components/Header'
import { Title } from 'components/Title'
import { useState } from 'react'
import { colorsTuple } from 'components/Palette'
import { Preview } from 'components/Preview'
import { Counter } from 'components/Counter'
import { useAnalyticsQuery } from '../../graphql/generated/graphql'
import { Dropzone } from 'components/Dropzone'

export default function Create() {
  const [imageUrl, setImageUrl] = useState<null | string>(null)
  const [colors, setColors] = useState<colorsTuple | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const { data: count } = useAnalyticsQuery()

  return (
    <Layout.Main>
      <Header secondary />
      <Title
        title="create"
        description="Generate color pallettes or gradients from your own images "
      />

      <Layout.Secondary mw="800px">
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
            reset={() => {
              setImageUrl(null)
              setColors(null)
              setLoading(false)
            }}
          />
        ) : null}

        <Counter count={count?.analytics[0]?.generatedPalettes} />
      </Layout.Secondary>
    </Layout.Main>
  )
}
