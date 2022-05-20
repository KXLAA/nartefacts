import styled from 'styled-components'
import { colors } from '@/styles/global'

export const Wrapper = styled.div`
  width: 100%;
  gap: 2rem;
  margin: 0 auto;
`

export const ImageWrapper = styled.div`
  border: 4px solid ${colors.graySecondary};
  border-radius: 4px;
  margin-bottom: 2rem;
  padding: 0;

  span {
    border-radius: 4px;
  }
`

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  gap: 1rem;
`
