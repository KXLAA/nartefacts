import * as React from 'react'

import { Button } from '@/components/button'
import { Flex } from '@/components/flex'
import { useDeleteAlbumMutation } from '@/graphql/generated/graphql'

import { Modal, ModalDescription, ModalTitle } from '../common'
import { DeleteAlbumModalProps } from './delete-album-modal.types'

export const DeleteAlbumModal = ({ trigger, id }: DeleteAlbumModalProps) => {
  const [openModal, setOpenModal] = React.useState(false)
  const [deleteAlbum] = useDeleteAlbumMutation()

  console.log(id)

  return (
    <Modal open={openModal} onOpenChange={setOpenModal} trigger={trigger}>
      <ModalTitle>Delete Album</ModalTitle>
      <ModalDescription>
        Are you you you want to delete the Album
      </ModalDescription>
      <Flex gap={4}>
        <Button
          variant="danger"
          label="Delete"
          size="sm"
          fullWidth
          onClick={() => {
            deleteAlbum({
              variables: {
                albumId: id,
              },
            })
            setOpenModal(false)
          }}
        />

        <Button
          variant="light"
          label="Cancel"
          size="sm"
          fullWidth
          onClick={() => {
            setOpenModal(false)
          }}
        />
      </Flex>
    </Modal>
  )
}
