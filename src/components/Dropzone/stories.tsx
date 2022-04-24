import { Story, Meta } from '@storybook/react'

import Dropzone from '.'

export default {
  component: Dropzone,
  title: 'Dropzone',
} as Meta

export const Basic: Story = () => <Dropzone />
