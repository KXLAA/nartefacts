import { Button } from '@/components/button'
import { Flex } from '@/components/flex'

import { Modal, ModalDescription, ModalTitle } from '../common'
import { ExportedTextArea } from './styles'

export const ExportPaletteModal = ({ small }: { small?: boolean }) => {
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
      <ExportedPaletteModal />
    </Modal>
  )
}

const ExportedPaletteModal = ({
  icon,
  description,
}: {
  icon?: React.ReactNode
  description?: string
}) => {
  return (
    <Modal trigger={<div>placeholder</div>}>
      <Flex gap={4} direction="column">
        <ModalTitle size="lg">Copy or Download</ModalTitle>
        <ExportedTextArea />
        <Flex gap={4}>
          <Button variant="light" size="sm" label="Copy" fullWidth />
          <Button variant="light" size="sm" label="Download" fullWidth />
        </Flex>
      </Flex>
    </Modal>
  )
}
