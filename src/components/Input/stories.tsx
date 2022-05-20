import { Story, Meta } from '@storybook/react'

import { Input } from '@/components/Input'

export default {
  component: Input,
  title: 'Input',
} as Meta

export const Basic: Story = () => <Input />
