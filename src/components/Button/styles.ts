import styled from 'styled-components'
import { ButtonProps } from '@/components/Button'
import { colors } from '@/styles/global'

const { grayPrimary, blackSecondary } = colors

type StyledButtonProps = Pick<
  ButtonProps,
  'buttonColor' | 'textColor' | 'fullWidth' | 'buttonType'
>

export const Button = styled.button<StyledButtonProps>`
  display: flex;
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '301px')};
  width: 100%;
  height: 82px;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  background: ${({ buttonColor }) => (buttonColor ? buttonColor : 'none')};
  font-size: 36px;
  border: ${({ buttonType, textColor }) =>
    buttonType === 'link-outline' || buttonType === 'outline'
      ? `solid 4px ${textColor}`
      : 'none'};
  border-radius: 8px;
  color: ${({ textColor }) => textColor};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #dddddd;
  }

  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    background-color: ${grayPrimary};
    color: ${blackSecondary};
    cursor: not-allowed;
    transform: none;
  }
`

export const Link = styled.a<StyledButtonProps>`
  display: flex;
  max-width: 301px;
  width: 100%;
  height: 82px;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  background-color: ${({ buttonColor }) => buttonColor || grayPrimary};
  font-size: 36px;
  border: none;
  border-radius: 8px;
  color: ${({ textColor }) => textColor || blackSecondary};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #dddddd;
  }

  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }
`
