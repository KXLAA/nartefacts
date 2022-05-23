import { useS3Upload } from 'next-s3-upload'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { RotatingLines } from 'react-loader-spinner'

import * as S from '@/components/Dropzone/styles'
import { UploadPlus } from '@/components/Icons'
import { ColorsTuple } from '@/components/Palette'
import {
  useGenerateColorsMutation,
  useUpdateAnalyticsMutation,
} from '@/graphql/generated/graphql'
import { UploadState } from '@/pages/create'

export type DropzoneProps = {
  upload: UploadState
  setUpload: React.Dispatch<React.SetStateAction<UploadState>>
}

export const Dropzone: React.FC<DropzoneProps> = ({ upload, setUpload }) => {
  const { uploadToS3 } = useS3Upload()
  const [generateColors] = useGenerateColorsMutation()
  const [updateAnalytics] = useUpdateAnalyticsMutation()

  const onDrop = useCallback(async (acceptedFiles) => {
    setUpload((prev) => ({ ...prev, isUploading: true }))
    try {
      const { url } = await uploadToS3(acceptedFiles[0])
      const id = '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
      if (url) {
        setUpload((prev) => ({ ...prev, isUploading: false, imageUrl: url }))
        const { data } = await generateColors({
          variables: {
            imageUrl: url,
          },
        })
        await updateAnalytics({
          variables: {
            id: id,
          },
          optimisticResponse: {
            updateAnalytics: {
              id: id,
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
    <S.Drop {...getRootProps()}>
      <input {...getInputProps()} />
      {!upload.error ? (
        <S.Content>
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
        </S.Content>
      ) : (
        <p>{upload.error}</p>
      )}
    </S.Drop>
  )
}
