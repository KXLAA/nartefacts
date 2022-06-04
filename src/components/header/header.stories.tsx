import { Meta, Story } from '@storybook/react'

import { Header } from '@/components/header'
import * as Layout from '@/components/layout'

export default {
  component: Header,
  title: 'Header',
} as Meta

export const Basic: Story = () => (
  <Layout.Main>
    <Header />
  </Layout.Main>
)
