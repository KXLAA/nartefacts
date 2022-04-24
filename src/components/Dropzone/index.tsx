import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import * as S from './styles'
import { UploadPlus } from 'components/Icons'

export const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  })

  return (
    <S.Wrapper {...getRootProps()}>
      <S.Drop>
        <input {...getInputProps()} />
        <h1>Dropzone</h1>

        <S.Content>
          <UploadPlus size={72} strokeWidth={0.5} color="#5A5A5A" />

          {isDragActive ? (
            <p>drop the files here ...</p>
          ) : (
            <p>drag {'n'} drop your image here, or click to select files</p>
          )}
        </S.Content>
      </S.Drop>
    </S.Wrapper>
  )
}
