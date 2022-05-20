import { Story, Meta } from '@storybook/react'
import * as Layout from '@/components/Common/Layout'

import { Header } from '@/components/Header'

export default {
  component: Header,
  title: 'Header',
} as Meta

export const Basic: Story = () => (
  <Layout.Main>
    <Header />
  </Layout.Main>
)
