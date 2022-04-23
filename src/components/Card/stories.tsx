import { Story, Meta } from '@storybook/react'

import { Card } from '.'

export default {
  component: Card,
  title: 'Card',
  args: {
    albumArt:
      'https://ucarecdn.com/c515e4b5-a5bb-44a3-85d0-f139497e0de0/forbrokenearsep_tems.jpeg',
  },
} as Meta

export const Basic: Story = (args) => <Card {...args} />
