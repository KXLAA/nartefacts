import * as React from 'react'

type ColorTuple = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
]

export type ExportPaletteModalProps = {
  small?: boolean
  colors?: ColorTuple
}

export type ExportedProps = {
  colors: ColorTuple
  type: 'code' | 'css'
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  setOpenExport: React.Dispatch<
    React.SetStateAction<{ open: boolean; type: 'code' | 'css' }>
  >
}
