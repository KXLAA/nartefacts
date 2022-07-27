import { Meta, Story } from '@storybook/react'

import { Palette } from '@/components/palette'
import { colors as testColors } from '@/utils'

export default {
  component: Palette,
  title: 'Palette',
} as Meta

export const Basic: Story = () => <Palette colors={testColors} />
