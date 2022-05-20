import { Story, Meta } from '@storybook/react'
import { imageUrl } from '@/components/utils'

import { Toast } from '@/components/Toast'

export default {
  component: Toast,
  title: 'Toast',
} as Meta

export const Basic: Story = () => <Toast imageUrl={imageUrl} />
