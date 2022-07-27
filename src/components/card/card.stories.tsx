import { Meta, Story } from '@storybook/react'

import { Card } from '@/components/card'
import { mockAlbum } from '@/utils'

export default {
  component: Card,
  title: 'Card',
} as Meta

export const Basic: Story = () => <Card {...mockAlbum} />
