import { styled } from '@/lib/stitches'

export const ExportButton = styled('button', {
  all: 'unset',
})

export const ExportedTextArea = styled('textarea', {
  bg: 'transparent',
  resize: 'none',
  outline: 'none',
  background: 'none',
  border: 'solid 4px $gray-base',
  br: 4,
  width: '100%',
  p: '$4',
  color: '$gray-light',
  fontSize: '$sm',
})
