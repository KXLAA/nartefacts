import * as S from '@/components/Button/styles'
import { capitalize } from '@/utils'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'

export type ButtonProps = {
  text?: string
  buttonColor?: string
  textColor?: string
  fullWidth?: boolean
  onClick?: () => void
  href?: string
  icon?: Element
  disabled?: boolean
  buttonType?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'link-outline'
    | 'link-primary'
    | 'link-secondary'
  type?: 'button' | 'submit' | 'reset'
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

const ButtonLink = forwardRef(Link)

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  fullWidth,
  buttonType,
  href,
  disabled,
  type = 'button',
}) => {
  switch (buttonType) {
    case 'primary':
      return (
        <S.Button
          buttonColor="#5A5A5A"
          textColor="#202020"
          role="button"
          onClick={onClick}
          fullWidth={fullWidth}
          disabled={disabled}
          type={type}
        >
          {capitalize(text!) || 'Button'}
        </S.Button>
      )
    case 'secondary':
      return (
        <S.Button
          buttonColor="#202020"
          textColor="#5A5A5A"
          role="button"
          onClick={onClick}
          fullWidth={fullWidth}
          disabled={disabled}
          type={type}
        >
          {capitalize(text!) || 'Button'}
        </S.Button>
      )
    case 'outline':
      return (
        <S.Button
          textColor="#5A5A5A"
          role="button"
          onClick={onClick}
          buttonType="outline"
          fullWidth={fullWidth}
          disabled={disabled}
          type={type}
        >
          {capitalize(text!) || 'Button'}
        </S.Button>
      )

    case 'link-outline':
      return (
        <ButtonLink
          textColor="#5A5A5A"
          onClick={onClick}
          buttonType="outline"
          fullWidth={fullWidth}
          href={href}
          text={text}
        />
      )
    case 'link-primary':
      return (
        <ButtonLink
          buttonColor="#5A5A5A"
          textColor="#202020"
          onClick={onClick}
          fullWidth={fullWidth}
          href={href}
          text={text}
        />
      )
    case 'link-secondary':
      return (
        <ButtonLink
          buttonColor="#202020"
          textColor="#5A5A5A"
          href={href}
          onClick={onClick}
          fullWidth={fullWidth}
          text={text}
        />
      )
    default:
      return (
        <S.Button
          buttonColor="#5A5A5A"
          textColor="#202020"
          role="button"
          onClick={onClick}
          fullWidth={fullWidth}
        >
          {capitalize(text!) || 'Button'}
        </S.Button>
      )
  }
}
