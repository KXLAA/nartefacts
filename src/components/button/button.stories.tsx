/* eslint-disable @typescript-eslint/no-unused-vars */
import { Meta, Story } from '@storybook/react'

import { Button } from '@/components/button'

export default {
  component: Button,
  title: 'Button',
  args: {
    text: 'Basic',
  },
} as Meta

// export const Basic: Story = (args) => <Button {...args} />

// export const Default: Story = () => <Button />
