import { Story, Meta } from '@storybook/react'
import { testColors } from './__tests__/Palette.test'

import { Palette } from '.'

export default {
  component: Palette,
  title: 'Palette',
} as Meta

export const Basic: Story = () => <Palette colors={testColors} />
