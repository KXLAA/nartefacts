import { FileUp } from 'lucide-react'
import { useS3Upload } from 'next-s3-upload'
import * as React from 'react'
import { useDropzone } from 'react-dropzone'
import { RotatingLines } from 'react-loader-spinner'

import { ColorsTuple } from '@/components/palette'
import { Spacer } from '@/components/spacer'
import {
  useAnalyticsQuery,
  useGenerateColorsMutation,
  useUpdateAnalyticsMutation,
} from '@/graphql/generated/graphql'

import { StyledContent, StyledDrop } from './dropzone.styles'
import { DropzoneProps } from './dropzone.types'

export const Dropzone = ({ upload, setUpload }: DropzoneProps) => {
  const { uploadToS3 } = useS3Upload()
  const { data: count } = useAnalyticsQuery()
  const [generateColors] = useGenerateColorsMutation()
  const [updateAnalytics] = useUpdateAnalyticsMutation()

  const onDrop = React.useCallback(async (acceptedFiles) => {
    setUpload((prev) => ({ ...prev, isUploading: true }))
    try {
      const { url } = await uploadToS3(acceptedFiles[0])
      const id = '62926cd85bfc86a848203302' || count?.analytics[0]?.id
      if (url) {
        setUpload((prev) => ({ ...prev, isUploading: false, imageUrl: url }))
        const { data } = await generateColors({
          variables: {
            imageUrl: url,
          },
        })
        await updateAnalytics({
          variables: {
            id: id as string,
          },
          optimisticResponse: {
            updateAnalytics: {
              id: id as string,
              generatedPalettes: 1,
            },
          },
        })
        setUpload((prev) => ({
          ...prev,
          colors: data?.generateColors?.colors as ColorsTuple,
        }))
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setUpload((prev) => ({ ...prev, error: (error as Error).message }))
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: 'image/jpeg,image/png',
  })

  return (
    <StyledDrop
      {...getRootProps()}
      size={{
        '@initial': 'sm',
        '@md': 'lg',
      }}
      active={isDragActive}
      data-testid="dropzone"
    >
      <input data-testid="dropzone" {...getInputProps()} />
      {!upload.error ? (
        <StyledContent>
          {upload.isUploading ? (
            <RotatingLines width="100" strokeColor="#5A5A5A" />
          ) : (
            <>
              <FileUp size={100} strokeWidth={1} color="#5A5A5A" />
              <Spacer size="4" />
              {isDragActive ? (
                <p>
                  drop your files here <br /> to upload ...
                </p>
              ) : (
                <div>
                  <p>
                    drag {'n'} drop your image here, <br /> or click to select
                    files
                  </p>
                </div>
              )}
            </>
          )}
        </StyledContent>
      ) : (
        <p>{upload.error}</p>
      )}
    </StyledDrop>
  )
}
