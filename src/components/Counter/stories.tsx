import { Story, Meta } from '@storybook/react'

import { Counter } from '@/components/Counter'

export default {
  component: Counter,
  title: 'Counter',
} as Meta

export const Basic: Story = () => <Counter />
