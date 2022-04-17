import { Story, Meta } from '@storybook/react'

import { Card } from '.'

export default {
  component: Card,
  title: 'Card',
} as Meta

export const Basic: Story = () => <Card />
