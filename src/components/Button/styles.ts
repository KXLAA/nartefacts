import styled from 'styled-components'

import { ButtonProps } from '@/components/Button'
import { getFontSize, theme } from '@/styles/global'

const { colors } = theme
export const Wrapper = styled.div``

type StyledButtonProps = Pick<
  ButtonProps,
  'color' | 'buttonType' | 'width' | 'height' | 'fontSize' | 'active'
>

const getButtonStyle = (color: StyledButtonProps['color']) => {
  switch (color) {
    case 'light':
      return {
        bg: colors.grayLight,
        label: colors.blackLight,
      }
    case 'dark':
      return {
        bg: colors.blackLight,
        label: colors.grayLight,
      }
    case 'danger':
      return {
        bg: colors.red,
        label: colors.white,
      }
    default:
      return {
        bg: colors.blackLight,
        label: colors.grayLight,
      }
  }
}

const getButtonHeight = (height: StyledButtonProps['height']) => {
  switch (height) {
    case 'sm':
      return '36px'
    case 'md':
      return '62px'
    case 'lg':
      return '82px'
    default:
      return '82px'
  }
}

const getButtonWidth = (width: StyledButtonProps['width']) => {
  switch (width) {
    case 'full':
      return '100%'
    case 'sm':
      return '187px'
    case 'md':
      return '254px'
    case 'lg':
      return '405px'
    default:
      return '296px'
  }
}

export const Link = styled.a<StyledButtonProps>`
  display: flex;
  max-width: ${({ width }) => getButtonWidth(width)};
  width: 100%;
  min-height: ${({ height }) => getButtonHeight(height)};
  align-items: center;
  padding: 0 16px;
  justify-content: center;
  background-color: ${({ color, active }) =>
    active ? getButtonStyle('light').bg : getButtonStyle(color).bg};
  font-size: ${({ fontSize }) =>
    fontSize ? getFontSize(fontSize) : getFontSize('xl')};
  border: none;
  border-radius: 8px;
  color: ${({ color, active }) =>
    active ? getButtonStyle('light').label : getButtonStyle(color).label};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }
`

export const Button = styled.button<StyledButtonProps>`
  display: flex;
  max-width: ${({ width }) => getButtonWidth(width)};
  width: 100%;
  height: ${({ height }) => getButtonHeight(height)};
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0 16px;
  background-color: ${({ color }) => getButtonStyle(color).bg};
  font-size: ${({ fontSize }) =>
    fontSize ? getFontSize(fontSize) : getFontSize('xl')};
  border-radius: 8px;
  color: ${({ color }) => getButtonStyle(color).label};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    cursor: not-allowed;
    transform: none;
  }
`
