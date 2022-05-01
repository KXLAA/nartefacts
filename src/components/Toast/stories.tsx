import { Story, Meta } from '@storybook/react'
import { imageUrl } from 'components/utils'

import { Toast } from '.'

export default {
  component: Toast,
  title: 'Toast',
} as Meta

export const Basic: Story = () => <Toast imageUrl={imageUrl} />
