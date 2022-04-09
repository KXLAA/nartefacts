import { Story, Meta } from '@storybook/react'

import { Logo } from '.'

export default {
  component: Logo,
  title: 'Logo',
} as Meta

export const Basic: Story = () => <Logo />
