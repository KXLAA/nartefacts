import styled from 'styled-components'
import { colors } from 'styles/global'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Gradient = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  );
  width: 100%;
  height: 122px;
  border: 4px solid ${colors.graySecondary};
  border-radius: 4px;
`

export const ImageWrapper = styled.div`
  border: 4px solid ${colors.graySecondary};
  border-radius: 4px;
  span {
    border-radius: 4px;
  }
`
