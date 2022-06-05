import { Box } from '@/components/box'
import { styled } from '@/lib/stitches'

export const StyledDrop = styled('div', {
  backgroundColor: '$black-light',
  border: '1.5px dashed $gray-base',
  borderRadius: '$rounded',
  width: '100%',
  height: '800px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '$white-base',
    transform: 'translateX(0rem) translateY(0.125rem)',
  },
})

export const StyledContent = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100%',
  '& p': {
    fontSize: '$lg',
    fontWeight: 'bold',
    width: '70%',
    textAlign: 'center',
    color: '$gray-light',
  },
})
