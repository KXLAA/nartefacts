import { ColorsTuple } from '@/components/palette'

export type DropzoneProps = {
  upload: UploadState
  setUpload: React.Dispatch<React.SetStateAction<UploadState>>
}
export type UploadState = {
  isUploading?: boolean
  imageUrl?: string
  error?: string
  colors?: ColorsTuple
}
