export type DropzoneProps = {
  upload: UploadState
  setUpload: React.Dispatch<React.SetStateAction<UploadState>>
}
export type UploadState = {
  isUploading: boolean
  imageUrl: null | string
  error: null | string
  colors: null | string[]
}
