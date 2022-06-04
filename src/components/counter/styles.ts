import { styled } from '@/lib/stitches'

export const StyledWrapper = styled('div', {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
})

export const StyledCounter = styled('div', {
  backgroundColor: '$black-light',
  fontWeight: 'bold',
  width: '100%',
  borderRadius: '$rounded',
  maxWidth: '500px',
  fontSize: '$lg',
  py: '$1',
})
