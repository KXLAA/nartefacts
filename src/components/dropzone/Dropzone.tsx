import { useS3Upload } from 'next-s3-upload'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { RotatingLines } from 'react-loader-spinner'

import { UploadPlus } from '@/components/icons'
import { ColorsTuple } from '@/components/palette'
import {
  useAnalyticsQuery,
  useGenerateColorsMutation,
  useUpdateAnalyticsMutation,
} from '@/graphql/generated/graphql'

import { StyledContent, StyledDrop } from './styles'
import { DropzoneProps } from './types'

export const Dropzone: React.FC<DropzoneProps> = ({ upload, setUpload }) => {
  const { uploadToS3 } = useS3Upload()
  const { data: count } = useAnalyticsQuery()
  const [generateColors] = useGenerateColorsMutation()
  const [updateAnalytics] = useUpdateAnalyticsMutation()

  const onDrop = useCallback(async (acceptedFiles) => {
    setUpload((prev) => ({ ...prev, isUploading: true }))
    try {
      const { url } = await uploadToS3(acceptedFiles[0])
      const id = count?.analytics[0]?.id
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
    <StyledDrop {...getRootProps()}>
      <input {...getInputProps()} />
      {!upload.error ? (
        <StyledContent>
          {upload.isUploading ? (
            <RotatingLines width="100" strokeColor="#FF5733" />
          ) : (
            <>
              <UploadPlus size={72} strokeWidth={0.5} color="#5A5A5A" />

              {isDragActive ? (
                <p>drop the files here ...</p>
              ) : (
                <p>drag {'n'} drop your image here, or click to select files</p>
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
