/* istanbul ignore file */

import Head from 'next/head'
import * as React from 'react'

import { Counter } from '@/components/counter'
import { Dropzone, UploadState } from '@/components/dropzone'
import { Main } from '@/components/layout'
import { Preview } from '@/components/preview'
import { Spacer } from '@/components/spacer'
import { Title } from '@/components/title'
import { useAnalyticsQuery } from '@/graphql/generated/graphql'

export default function Create() {
  const [upload, setUpload] = React.useState<UploadState>({
    isUploading: false,
    imageUrl: undefined,
    error: undefined,
    colors: undefined,
  })
  const { data: count } = useAnalyticsQuery()
  const getTitle = () => {
    if (upload.isUploading) {
      return '👀 generating your pallette...'
    }

    if (!upload.imageUrl) {
      return '✨ generate color pallettes from your images'
    }

    return '💾 save or export your color pallette'
  }
  const title = getTitle()

  const reset = () => {
    setUpload((prev) => ({
      ...prev,
      colors: undefined,
      imageUrl: undefined,
      isUploading: false,
    }))
  }

  return (
    <Main size="md" headerType="secondary">
      <Head>
        <title>{title}</title>
      </Head>
      <Spacer size="8" />
      <Title text={title} />
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
