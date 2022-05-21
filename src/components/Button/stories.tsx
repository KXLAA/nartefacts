/* eslint-disable @typescript-eslint/no-unused-vars */
import { Story, Meta } from '@storybook/react'
import { colors } from '@/styles/global'
const { grayPrimary, blackSecondary } = colors

import { Button } from '@/components/Button'

export default {
  component: Button,
  title: 'Button',
  args: {
    text: 'Basic',
    buttonColor: blackSecondary,
    textColor: grayPrimary,
  },
} as Meta

// export const Basic: Story = (args) => <Button {...args} />

// export const Default: Story = () => <Button />
