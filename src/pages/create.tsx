import * as Layout from 'components/common/Layout'
import { Header } from 'components/Header'
import { Title } from 'components/Title'

export default function Create() {
  return (
    <Layout.Main>
      <Header secondary />
      <Title
        title="create"
        description="Generate color pallettes or gradients 
from your own images "
      />
    </Layout.Main>
  )
}
