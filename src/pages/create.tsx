/* istanbul ignore file */

import * as Layout from '@/components/Common/Layout'
import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { useState } from 'react'
import { ColorsTuple } from '@/components/Palette'
import { Preview } from '@/components/Preview'
import { Counter } from '@/components/Counter'
import { useAnalyticsQuery } from '@/graphql/generated/graphql'
import { Dropzone } from '@/components/Dropzone'
import { Spacer } from '@/components/Common/Spacer'

export default function Create() {
  const [upload, setUpload] = useState<UploadState>({
    isUploading: false,
    imageUrl: null,
    error: null,
    colors: [],
  })
  const { data: count } = useAnalyticsQuery()

  return (
    <Layout.Main size="md">
      <Header secondary />
      <Title text="Generate color pallettes from your own images " />
      <Spacer size="md" />
      <>
        {!upload.imageUrl ? <Dropzone {...{ upload, setUpload }} /> : null}
        {upload.colors && upload.imageUrl ? (
          <Preview
            imageUrl={upload.imageUrl!}
            colors={upload.colors as ColorsTuple}
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
        <Spacer size="lg" />

        <Counter count={count?.analytics[0]?.generatedPalettes} />
      </>
    </Layout.Main>
  )
}

export type UploadState = {
  isUploading: boolean
  imageUrl: null | string
  error: null | string
  colors: null | string[]
}
