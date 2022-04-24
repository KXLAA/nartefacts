import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Drop = styled.div`
  background: #202020;
  border: 1px dashed #363636;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
  height: 800px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #d8d8d8;
    transform: translateX(0rem) translateY(0.125rem);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  gap: 24px;
  p {
    font-size: 24px;
    font-weight: bold;
    width: 70%;
    text-align: center;
    color: #5a5a5a;
  }
`
