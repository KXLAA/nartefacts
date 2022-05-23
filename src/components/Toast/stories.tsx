import { Meta, Story } from '@storybook/react'

import { Toast } from '@/components/Toast'
import { imageUrl } from '@/components/utils'

export default {
  component: Toast,
  title: 'Toast',
} as Meta

export const Basic: Story = () => <Toast imageUrl={imageUrl} />
