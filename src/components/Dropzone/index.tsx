import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import * as S from './styles'
import { UploadPlus } from 'components/Icons'
import { useS3Upload } from 'next-s3-upload'
import { useGenerateColorsMutation } from '../../../graphql/generated/graphql'
import { RotatingLines } from 'react-loader-spinner'

export const Dropzone = () => {
  const { uploadToS3 } = useS3Upload()
  const [imageUrl, setImageUrl] = useState<undefined | string>()
  const [loading, setLoading] = useState<boolean>()
  const [colors, setColors] = useState<string[] | null | undefined>([])
  const [generateColors] = useGenerateColorsMutation()

  const onDrop = useCallback(async (acceptedFiles) => {
    setLoading(true)
    const { url } = await uploadToS3(acceptedFiles[0])
    setImageUrl(url)
    if (url) {
      setLoading(false)
      const { data } = await generateColors({
        variables: {
          imageUrl: url,
        },
      })
      setColors(data?.generateColors?.colors)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: 'image/jpeg,image/png',
  })

  return (
    <S.Wrapper {...getRootProps()}>
      <S.Drop>
        <input {...getInputProps()} />
        <h1>Dropzone</h1>

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
      </S.Drop>
    </S.Wrapper>
  )
}
