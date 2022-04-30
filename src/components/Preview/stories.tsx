import { Story, Meta } from '@storybook/react'

import { Preview } from '.'

export default {
  component: Preview,
  title: 'Preview',
} as Meta

export const Basic: Story = () => <Preview />
