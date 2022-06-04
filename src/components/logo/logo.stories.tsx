import { Meta, Story } from '@storybook/react'

import { Logo } from '@/components/logo'

export default {
  component: Logo,
  title: 'Logo',
} as Meta

export const Basic: Story = () => <Logo />
