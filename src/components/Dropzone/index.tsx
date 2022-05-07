import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import * as S from './styles'
import { UploadPlus } from '../Icons'
import { useS3Upload } from 'next-s3-upload'
import {
  useGenerateColorsMutation,
  useUpdateAnalyticsMutation,
} from '../../../graphql/generated/graphql'
import { RotatingLines } from 'react-loader-spinner'
import { colorsTuple } from 'components/Palette'

export type DropzoneProps = {
  setImageUrl: React.Dispatch<React.SetStateAction<string | null>>
  setColors?: React.Dispatch<React.SetStateAction<colorsTuple | null>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setError: React.Dispatch<React.SetStateAction<string | null>>
  error: string | null
}

export const Dropzone: React.FC<DropzoneProps> = ({
  setImageUrl,
  setColors,
  loading,
  setLoading,
  setError,
  error,
}) => {
  const { uploadToS3 } = useS3Upload()
  const [generateColors] = useGenerateColorsMutation()
  const [updateAnalytics] = useUpdateAnalyticsMutation()

  const onDrop = useCallback(async (acceptedFiles) => {
    setLoading(true)
    try {
      const { url } = await uploadToS3(acceptedFiles[0])
      const id = '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
      setImageUrl(url)
      if (url) {
        setLoading(false)
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
        setColors && setColors(data?.generateColors?.colors as colorsTuple)
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
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
      {!error ? (
        <S.Content>
          {loading ? (
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
        <p>{error}</p>
      )}
    </S.Drop>
  )
}
