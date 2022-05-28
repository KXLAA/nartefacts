import { styled } from '@/lib/stitches.config'

export const Wrapper = styled('div', {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
})

export const Counter = styled('div', {
  backgroundColor: '$black-light',
  fontWeight: 'bold',
  width: '100%',
  borderRadius: '$rounded',
  maxWidth: '500px',
  fontSize: '$lg',
  py: '$1',
})
