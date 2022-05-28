import { Meta, Story } from '@storybook/react'

import { Card } from '@/components/Card'
import { mockAlbum } from '@/components/utils'

export default {
  component: Card,
  title: 'Card',
} as Meta

export const Basic: Story = () => <Card {...mockAlbum} />
