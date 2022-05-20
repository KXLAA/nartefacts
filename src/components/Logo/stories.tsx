import { Story, Meta } from '@storybook/react'

import { Logo } from '@/components/Logo'

export default {
  component: Logo,
  title: 'Logo',
} as Meta

export const Basic: Story = () => <Logo />
