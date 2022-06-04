import { Meta, Story } from '@storybook/react'

import { Title } from '@/components/title'

export default {
  component: Title,
  title: 'Title',
} as Meta

export const Basic: Story = () => <Title />
