import { styled } from '@/lib/stitches'

export const ExportButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  width: '100%',
  height: 84,
  bg: '$gray-base',
  color: '$gray-light',
  borderRadius: 4,
  padding: '$4',
  fontWeight: 'bold',
  textAlign: 'center',
})

export const ExportedTextArea = styled('textarea', {
  bg: 'transparent',
  overflowY: 'scroll',
  resize: 'none',
  outline: 'none',
  background: 'none',
  border: 'solid 2px $gray-base',
  br: 4,
  width: '100%',
  p: '$4',
  color: '$gray-light',
  fontSize: '$sm',
  height: 300,
})
