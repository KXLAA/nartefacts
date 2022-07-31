import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import * as React from 'react'

import {
  SelectIcon,
  SelectItemIndicator,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  StyledContent,
  StyledSelectItem,
} from './select.styles'

export const Select = ({ children, ...props }: SelectPrimitive.SelectProps) => {
  return (
    <SelectRoot {...props}>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit…" />
        <SelectIcon>
          <ChevronDown size={16} />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent>
        <SelectViewport>{children}</SelectViewport>
      </SelectContent>
    </SelectRoot>
  )
}

const SelectContent = ({
  children,
  ...props
}: {
  children?: React.ReactNode
}) => {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  )
}

export const SelectItem = ({
  children,
  ...props
}: {
  children?: React.ReactNode
  value: string
}) => {
  return (
    <StyledSelectItem {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectItemIndicator>
        <Check size={16} />
      </SelectItemIndicator>
    </StyledSelectItem>
  )
}
