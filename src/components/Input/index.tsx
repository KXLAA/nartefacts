/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  DetailedHTMLProps,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'

import * as S from '@/components/Input/styles'

export type InputType = 'text' | 'email'

export type InputProps = {
  id?: string
  name?: string
  label?: string
  type?: InputType
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
>

const Field: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { id, name, label, type = 'text', placeholder, ...props },
  ref,
) => {
  return (
    <S.Input
      id={id}
      ref={ref as any}
      name={name}
      type={type}
      aria-label={label}
      placeholder={placeholder}
      {...props}
    />
  )
}

export const Input = forwardRef(Field)
