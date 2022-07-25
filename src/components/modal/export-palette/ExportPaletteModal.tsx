import { Dispatch, SetStateAction, useState } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/button'
import { Flex } from '@/components/flex'
import { useExportColorsMutation } from '@/graphql/generated/graphql'
import { useCopyToClipboard } from '@/lib/hooks'
import { getColorsForExport } from '@/utils'

import { Modal, ModalDescription, ModalTitle } from '../common'
import { ExportButton, ExportedTextArea } from './styles'

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

export const ExportPaletteModal = ({
  small,
  colors,
}: {
  small?: boolean
  colors?: ColorTuple
}) => {
  const [openExport, setOpenExport] = useState<{
    open: boolean
    type: 'code' | 'css'
  }>({ open: false, type: '' as 'code' | 'css' })
  const [openModal, setOpenModal] = useState(false)
  return (
    <Modal
      open={openModal}
      onOpenChange={setOpenModal}
      trigger={
        <Button
          variant="dark"
          label="export"
          size={small ? 'sm' : 'md'}
          fullWidth
        />
      }
    >
      {openExport.open ? (
        <Exported
          colors={colors!}
          type={openExport.type}
          setOpenModal={setOpenModal}
          setOpenExport={setOpenExport}
        />
      ) : (
        <>
          <ModalTitle>Export Palette</ModalTitle>
          <ModalDescription>
            Pick an option to export your colors
          </ModalDescription>
          <Flex gap={4}>
            <ExportButton
              onClick={() => {
                setOpenExport({ open: true, type: 'css' })
              }}
            >
              CSS
            </ExportButton>
            <ExportButton
              onClick={() => {
                setOpenExport({ open: true, type: 'code' })
              }}
            >
              CODE
            </ExportButton>
          </Flex>
        </>
      )}
    </Modal>
  )
}

const Exported = ({
  colors,
  type,
  setOpenModal,
  setOpenExport,
}: {
  colors: ColorTuple
  type: 'code' | 'css'
  setOpenModal: Dispatch<SetStateAction<boolean>>
  setOpenExport: Dispatch<
    SetStateAction<{ open: boolean; type: 'code' | 'css' }>
  >
}) => {
  const [, copy] = useCopyToClipboard()
  const [exportColors] = useExportColorsMutation()

  const exported = getColorsForExport(type, colors)
  const copyToClipboard = (exported: string) => {
    copy(exported)
    toast(`Copied`)
    setOpenExport({ open: false, type: '' as 'code' | 'css' })
  }
  const getDownloadLink = async () => {
    const { data } = await exportColors({
      variables: {
        colors: colors,
        type: type,
      },
    })
    if (data?.exportColors) {
      window.open(data?.exportColors)
    }
    setOpenModal(false)
    setOpenExport({ open: false, type: '' as 'code' | 'css' })
  }

  return (
    <Flex gap={4} direction="column">
      <ModalTitle size="lg">Copy</ModalTitle>
      <ExportedTextArea value={exported} />
      <Flex gap={4}>
        <Button
          variant="light"
          size="sm"
          label="Copy"
          fullWidth
          onClick={() => copyToClipboard(exported)}
        />

        <Button
          variant="light"
          size="sm"
          label="Download"
          fullWidth
          onClick={getDownloadLink}
        />
      </Flex>
    </Flex>
  )
}
