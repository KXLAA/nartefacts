/* istanbul ignore file */

import Head from 'next/head'
import { useState } from 'react'

import { Counter } from '@/components/counter'
import { Dropzone, UploadState } from '@/components/dropzone'
import { Header } from '@/components/header'
import { Main } from '@/components/layout'
import { Preview } from '@/components/preview'
import { Spacer } from '@/components/spacer'
import { Title } from '@/components/title'
import { useAnalyticsQuery } from '@/graphql/generated/graphql'

export default function Create() {
  const [upload, setUpload] = useState<UploadState>({
    isUploading: false,
    imageUrl: undefined,
    error: undefined,
    colors: undefined,
  })
  const { data: count } = useAnalyticsQuery()
  const getText = () => {
    if (upload.isUploading) {
      return '👀 generating your pallette...'
    }

    if (!upload.imageUrl) {
      return '✨ generate color pallettes from your images'
    }

    return '💾 save or export your color pallette'
  }

  const reset = () => {
    setUpload((prev) => ({
      ...prev,
      colors: undefined,
      imageUrl: undefined,
      isUploading: false,
    }))
  }

  return (
    <Main size="md">
      <Head>
        <title>{getText()}</title>
      </Head>
      <Header secondary />
      <Spacer size="8" />
      <Title text={getText()} />
      <Spacer size="8" />
      {!upload.imageUrl && !upload.colors ? (
        <Dropzone {...{ upload, setUpload }} />
      ) : (
        <Preview
          imageUrl={upload.imageUrl!}
          colors={upload.colors!}
          reset={reset}
        />
      )}
      <Spacer size="8" />
      <Counter count={count?.analytics[0]?.generatedPalettes} />
    </Main>
  )
}
