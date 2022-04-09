import { Story, Meta } from '@storybook/react'

import { Header } from '.'
import { Layout } from 'components/common/Layout'

export default {
  component: Header,
  title: 'Header',
} as Meta

export const Basic: Story = () => (
  <Layout>
    <Header />
  </Layout>
)
