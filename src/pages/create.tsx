/* istanbul ignore file */

import Head from 'next/head'
import { useState } from 'react'

import * as Layout from '@/components/Common/Layout'
import { Counter } from '@/components/Counter'
import { Dropzone } from '@/components/Dropzone'
import { Header } from '@/components/Header'
import { ColorsTuple } from '@/components/Palette'
import { Preview } from '@/components/Preview'
import { Spacer } from '@/components/Spacer'
import { Title } from '@/components/Title'
import { useAnalyticsQuery } from '@/graphql/generated/graphql'

export default function Create() {
  const [upload, setUpload] = useState<UploadState>({
    isUploading: false,
    imageUrl: null,
    error: null,
    colors: [],
  })
  const { data: count } = useAnalyticsQuery()
  const getText = (): string => {
    if (upload.isUploading) {
      return '👀 generating your pallette...'
    }

    if (!upload.imageUrl) {
      return '✨ generate color pallettes from your images'
    }

    return '💾 save your color pallette'
  }

  return (
    <Layout.Main size="md">
      <Head>
        <title>{getText()}</title>
      </Head>
      <Header secondary />
      <Spacer horizontal={8} />
      <Title text={getText()} />
      <Spacer horizontal={4} />
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
        <Spacer horizontal={8} />
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
