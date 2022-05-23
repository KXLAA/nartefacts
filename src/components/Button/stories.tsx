/* eslint-disable @typescript-eslint/no-unused-vars */
import { Meta, Story } from '@storybook/react'

import { Button } from '@/components/Button'
import { getColor } from '@/styles/global'

export default {
  component: Button,
  title: 'Button',
  args: {
    text: 'Basic',
    buttonColor: getColor('blackLight'),
    textColor: getColor('grayLight'),
  },
} as Meta

// export const Basic: Story = (args) => <Button {...args} />

// export const Default: Story = () => <Button />
