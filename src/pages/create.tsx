/* istanbul ignore file */

import Head from 'next/head'
import { useState } from 'react'

import { Counter } from '@/components/counter'
import { Dropzone, UploadState } from '@/components/dropzone'
import { Header } from '@/components/header'
import { Main } from '@/components/layout'
import { ColorsTuple } from '@/components/palette'
import { Preview } from '@/components/preview'
import { Spacer } from '@/components/spacer'
import { Title } from '@/components/title'
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
    <Main size="md">
      <Head>
        <title>{getText()}</title>
      </Head>
      <Header secondary />
      <Spacer size="8" />
      <Title text={getText()} />
      <Spacer size="4" />
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
        <Spacer size="8" />
        <Counter count={count?.analytics[0]?.generatedPalettes} />
      </>
    </Main>
  )
}
