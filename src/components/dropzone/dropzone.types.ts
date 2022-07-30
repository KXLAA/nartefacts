import { ColorsTuple } from '@/components/palette'

export interface DropzoneProps {
  upload: UploadState
  setUpload: React.Dispatch<React.SetStateAction<UploadState>>
}

export interface UploadState {
  isUploading?: boolean
  imageUrl?: string
  error?: string
  colors?: ColorsTuple
}
