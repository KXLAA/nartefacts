import Image from 'next/image'

import { Button } from '@/components/button'
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalTitle,
  StyledTrigger,
} from '@/components/modal'
import { ColorsTuple, Palette } from '@/components/palette'

import { StyledImageWrapper, StyledWrapper } from './styles'
import { GeneratedProps } from './types'

export const Generated: React.FC<GeneratedProps> = ({
  imageUrl,
  colors,
  small,
}) => {
  return (
    <StyledWrapper small={small}>
      <StyledImageWrapper small={small}>
        <Image
          src={imageUrl ? (imageUrl as string) : '/public/placeholder.png'}
          height={800}
          width={800}
          alt={'user uploaded image'}
          layout="responsive"
        />
      </StyledImageWrapper>

      {/* <Modal>
          <StyledTrigger>
            <Button variant="dark" label="export" size="md" fullWidth />
            <ModalContent>
              <ModalTitle>Export</ModalTitle>
              <ModalDescription>Pick an Option</ModalDescription>
            </ModalContent>
          </StyledTrigger>
        </Modal> */}
      <Button
        variant="dark"
        label="export"
        size={small ? 'sm' : 'md'}
        fullWidth
      />
      <Palette colors={colors as ColorsTuple} small={small} />
    </StyledWrapper>
  )
}
