/* eslint-disable @typescript-eslint/no-unused-vars */
import { Story, Meta } from '@storybook/react'
import { getColor } from '@/styles/global'

import { Button } from '@/components/Button'

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
