import { Meta, Story } from '@storybook/react'

import { Card } from '@/components/Card'

export default {
  component: Card,
  title: 'Card',
} as Meta

export const Basic: Story = () => <Card />
