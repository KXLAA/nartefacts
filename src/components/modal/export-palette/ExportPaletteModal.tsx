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
  return (
    <Modal
      trigger={
        <Button
          variant="dark"
          label="export"
          size={small ? 'sm' : 'md'}
          fullWidth
        />
      }
    >
      <ModalTitle>Export Palette</ModalTitle>
      <ModalDescription>Pick an option to export your colors</ModalDescription>
      <Flex gap={4}>
        <ExportedPaletteModal
          type="css"
          trigger={<ExportButton>CSS</ExportButton>}
          colors={colors as ColorTuple}
        />
        <ExportedPaletteModal
          type="code"
          trigger={<ExportButton>CODE</ExportButton>}
          colors={colors as ColorTuple}
        />
      </Flex>
    </Modal>
  )
}

const ExportedPaletteModal = ({
  trigger,
  colors,
  type,
}: {
  icon?: React.ReactNode
  description?: string
  trigger?: React.ReactNode
  colors: ColorTuple
  type: 'code' | 'css'
}) => {
  const [, copy] = useCopyToClipboard()
  const [exportColors, { loading }] = useExportColorsMutation()

  const exported = getColorsForExport(type, colors)
  const copyToClipboard = (exported: string) => {
    copy(exported)
    toast(`Copied`)
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
  }

  console.log(loading)

  return (
    <Modal trigger={trigger}>
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
    </Modal>
  )
}
