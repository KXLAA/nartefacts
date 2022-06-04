import { Meta, Story } from '@storybook/react'

import { Preview } from '@/components/preview'
import { colors, imageUrl } from '@/components/utils'

export default {
  component: Preview,
  title: 'Preview',
} as Meta

export const Basic: Story = () => (
  <Preview imageUrl={imageUrl} colors={colors} />
)
