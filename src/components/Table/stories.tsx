import { Story, Meta } from '@storybook/react'

import { Table } from '.'

export default {
  component: Table,
  title: 'Table',
} as Meta

export const Basic: Story = () => <Table />
