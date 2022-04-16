import * as S from './styles'
import { capitalize } from 'utils'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'

export type ButtonProps = {
  text?: string
  buttonColor?: string
  textColor?: string
  onClick?: () => void
  href?: string
}

export const Button: React.FC<ButtonProps> = ({
  buttonColor,
  text,
  textColor,
}) => {
  return (
    <S.Button buttonColor={buttonColor} textColor={textColor} role="button">
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
