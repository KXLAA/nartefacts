import { Story, Meta } from '@storybook/react'
import { colors, imageUrl } from '@/components/utils'

import { Preview } from '@/components/Preview'

export default {
  component: Preview,
  title: 'Preview',
} as Meta

export const Basic: Story = () => (
  <Preview imageUrl={imageUrl} colors={colors} />
)
