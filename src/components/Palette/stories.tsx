import { Meta, Story } from '@storybook/react'

import { Palette } from '@/components/Palette'
import { colors as testColors } from '@/components/utils'

export default {
  component: Palette,
  title: 'Palette',
} as Meta

export const Basic: Story = () => <Palette colors={testColors} />
