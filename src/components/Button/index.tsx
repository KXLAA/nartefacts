import { forwardRef, ForwardRefRenderFunction } from 'react'

import * as S from '@/components/Button/styles'
import { FontSize, Size } from '@/styles/global'

export interface ButtonProps {
  label?: string
  color?: 'light' | 'dark' | 'danger'
  width?: 'full' | Extract<Size, 'sm' | 'md' | 'lg'>
  height?: Extract<Size, 'sm' | 'md' | 'lg'>
  fontSize?: FontSize
  onClick?: () => void
  href?: string
  active?: boolean
  disabled?: boolean
  buttonType?:
    | 'primary'
    | 'secondary'
    | 'link-primary'
    | 'link-secondary'
    | 'danger'
  type?: 'button' | 'submit' | 'reset'
}

const Link: ForwardRefRenderFunction<HTMLAnchorElement, ButtonProps> = (
  {
    label = `Button Link`,
    color,
    active,
    width,
    height,
    onClick,
    href,
    fontSize,
  },
  ref,
) => {
  return (
    <S.Link
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
      href={href}
      onClick={onClick}
      ref={ref}
      active={active}
    >
      {label}
    </S.Link>
  )
}

const ButtonLink = forwardRef(Link)

export const Button: React.FC<ButtonProps> = ({
  label,
  width,
  height,
  onClick,
  buttonType,
  href,
  fontSize,
  disabled,
  type = 'button',
  active,
}) => {
  switch (buttonType) {
    case 'primary':
      return (
        <S.Button
          color="dark"
          role="button"
          onClick={onClick}
          width={width}
          height={height}
          fontSize={fontSize}
          disabled={disabled}
          type={type}
          active={active}
        >
          {label || 'Primary Button'}
        </S.Button>
      )
    case 'secondary':
      return (
        <S.Button
          color="light"
          role="button"
          onClick={onClick}
          width={width}
          height={height}
          fontSize={fontSize}
          disabled={disabled}
          type={type}
          active={active}
        >
          {label || 'Secondary Button'}
        </S.Button>
      )
    case 'danger':
      return (
        <S.Button
          color="danger"
          role="button"
          onClick={onClick}
          width={width}
          height={height}
          fontSize={fontSize}
          disabled={disabled}
          type={type}
          active={active}
        >
          {label || 'Danger Button'}
        </S.Button>
      )
    case 'link-primary':
      return (
        <ButtonLink
          color="dark"
          width={width}
          height={height}
          href={href}
          fontSize={fontSize}
          onClick={onClick}
          label={label}
          active={active}
        />
      )
    case 'link-secondary':
      return (
        <ButtonLink
          color="light"
          width={width}
          height={height}
          href={href}
          fontSize={fontSize}
          onClick={onClick}
          label={label}
          active={active}
        />
      )
    default:
      return (
        <S.Button
          color="dark"
          role="button"
          onClick={onClick}
          width={width}
          height={height}
          disabled={disabled}
          fontSize={fontSize}
          type={type}
          active={active}
        >
          {label || 'Primary Button'}
        </S.Button>
      )
  }
}
