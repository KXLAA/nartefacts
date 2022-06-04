import { styled } from '@/lib/stitches'

export const StyledWrapper = styled('div', {
  width: '100%',
  maxWidth: '400px',
  backgroundColor: '$black-light',
  border: '1px solid $gray-light',
  borderRadius: '$rounded-sm',
  padding: '$xs',
  cursor: 'pointer',
  '& span': {
    borderRadius: '$rounded-sm',
  },
})

export const StyledText = styled('p', {
  color: '$gray-light',
  fontSize: '$lg',
  textAlign: 'center',
  fontWeight: 'bold',
  paddingTop: '$xs',
})
