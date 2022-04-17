import { Story, Meta } from '@storybook/react'
import { Header } from '.'
import * as Layout from 'components/common/Layout'

export default {
  component: Header,
  title: 'Header',
} as Meta

export const Basic: Story = () => (
  <Layout.Main>
    <Header />
  </Layout.Main>
)
