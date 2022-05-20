/* istanbul ignore file */

import * as Layout from '@/components/Common/Layout'
import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { useState } from 'react'
import { colorsTuple } from '@/components/Palette'
import { Preview } from '@/components/Preview'
import { Counter } from '@/components/Counter'
import { useAnalyticsQuery } from '@/graphql/generated/graphql'
import { Dropzone } from '@/components/Dropzone'

export default function Create() {
  const [upload, setUpload] = useState<UploadState>({
    isUploading: false,
    imageUrl: null,
    error: null,
    colors: [],
  })
  const { data: count } = useAnalyticsQuery()

  return (
    <Layout.Main>
      <Header secondary />
      <Title
        title="create"
        description="Generate color pallettes or gradients from your own images "
      />

      <Layout.Main>
        {!upload.imageUrl ? <Dropzone {...{ upload, setUpload }} /> : null}
        {upload.colors && upload.imageUrl ? (
          <Preview
            imageUrl={upload.imageUrl!}
            colors={upload.colors as colorsTuple}
            reset={() => {
              setUpload((prev) => ({
                ...prev,
                colors: null,
                imageUrl: null,
                isUploading: false,
              }))
            }}
          />
        ) : null}

        <Counter count={count?.analytics[0]?.generatedPalettes} />
      </Layout.Main>
    </Layout.Main>
  )
}

export type UploadState = {
  isUploading: boolean
  imageUrl: null | string
  error: null | string
  colors: null | string[]
}
