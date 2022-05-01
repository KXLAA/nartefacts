import * as S from './styles'
import { capitalize } from 'utils'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'

export type ButtonProps = {
  text?: string
  buttonColor?: string
  textColor?: string
  fullWidth?: boolean
  onClick?: () => void
  href?: string
  icon?: Element
}

export const Button: React.FC<ButtonProps> = ({
  buttonColor,
  text,
  textColor,
  onClick,
  fullWidth,
}) => {
  return (
    <S.Button
      buttonColor={buttonColor}
      textColor={textColor}
      role="button"
      onClick={onClick}
      fullWidth={fullWidth}
    >
      {capitalize(text!) || 'Button'}
    </S.Button>
  )
}

const Link: ForwardRefRenderFunction<HTMLAnchorElement, ButtonProps> = (
  { buttonColor, text, textColor, onClick, href },
  ref,
) => {
  return (
    <S.Link
      buttonColor={buttonColor}
      textColor={textColor}
      href={href}
      onClick={onClick}
      ref={ref}
    >
      {capitalize(text!) || 'ButtonLink'}
    </S.Link>
  )
}

export const ButtonLink = forwardRef(Link)
