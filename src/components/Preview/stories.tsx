import { Story, Meta } from '@storybook/react'
import { testImageUrl } from './__tests__/Preview.test'
import { testColors } from 'components/Palette/__tests__/Palette.test'

import { Preview } from '.'

export default {
  component: Preview,
  title: 'Preview',
} as Meta

export const Basic: Story = () => (
  <Preview imageUrl={testImageUrl} colors={testColors} />
)
