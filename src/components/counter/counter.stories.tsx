import { Meta, Story } from '@storybook/react'

import { Counter } from '@/components/counter'

export default {
  component: Counter,
  title: 'Counter',
} as Meta

export const Basic: Story = () => <Counter />
