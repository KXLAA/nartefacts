import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import * as S from './styles'
import { UploadPlus } from '../Icons'
import { useS3Upload } from 'next-s3-upload'
import {
  useGenerateColorsMutation,
  useUpdateAnalyticsMutation,
} from 'graphql/generated/graphql'
import { RotatingLines } from 'react-loader-spinner'
import { colorsTuple } from 'components/Palette'
import { UploadState } from 'pages/create'

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
      setUpload((prev) => ({ ...prev, imageUrl: url }))
      if (url) {
        setUpload((prev) => ({ ...prev, isUploading: false }))
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
          colors: data?.generateColors?.colors as colorsTuple,
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
