import * as SelectPrimitive from '@radix-ui/react-select'

import { styled } from '@/lib/stitches'

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  br: 2,
  px: '$4',
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  bg: '$black-light',
  color: '$gray-light',
  boxShadow: `0 2px 10px $black-base`,
  '&:focus': { boxShadow: `0 0 0 2px $black-base` },
  '&[data-placeholder]': { color: '$gray-light' },
})

const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  color: '$gray-light',
})

export const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  bg: '$black-light',
  br: 2,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
})

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
})

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '$gray-base',
  br: 2,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  p: '0 $8 0 $6',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$gray-base',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: '$gray-light',
    color: '$black-base',
  },
})

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const SelectRoot = SelectPrimitive.Root
export const SelectTrigger = StyledTrigger
export const SelectValue = SelectPrimitive.Value
export const SelectIcon = StyledIcon
export const SelectViewport = StyledViewport
export const StyledSelectItem = StyledItem
export const SelectItemIndicator = StyledItemIndicator
