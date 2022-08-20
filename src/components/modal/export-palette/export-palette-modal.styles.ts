import { styled } from '@/lib/stitches'

export const ExportButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  w: '100%',
  h: 84,
  bg: '$gray-base',
  color: '$gray-light',
  br: 4,
  padding: '$4',
  fontWeight: 'bold',
  textAlign: 'center',
  transition: 'all 0.3s ease',

  '&:hover': {
    boxShadow: 'inset 0 0 100px 100px rgba(255, 255, 255, 0.1)',
    color: '$black-base',
  },
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
