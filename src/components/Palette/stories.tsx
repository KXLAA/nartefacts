import { Story, Meta } from '@storybook/react'
import { colors as testColors } from '@/components/utils'

import { Palette } from '@/components/Palette'

export default {
  component: Palette,
  title: 'Palette',
} as Meta

export const Basic: Story = () => <Palette colors={testColors} />
