import styled from 'styled-components'
import { colors } from 'styles/global'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`
export const ImageWrapper = styled.div`
  border: 4px solid ${colors.graySecondary};
  border-radius: 4px;

  span {
    border-radius: 4px;
  }
`
