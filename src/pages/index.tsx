/* istanbul ignore file */

import { Card } from '@/components/Card'
import * as Layout from '@/components/Common/Layout'
import { Header } from '@/components/Header'
import { Spacer } from '@/components/Spacer'
import {
  AllAlbumsDocument,
  AllAlbumsQueryResult,
} from '@/graphql/generated/graphql'
import { initializeApollo } from '@/lib/apollo'

export default function Home({ data }: AllAlbumsQueryResult) {
  const albums = data?.allAlbums?.node

  return (
    <Layout.Main>
      <Header primary />
      <Spacer horizontal={8} />

      <Layout.Grid columns={3}>
        {albums?.map((album) => (
          <Card key={album?.id} {...album} />
        ))}
      </Layout.Grid>
    </Layout.Main>
  )
}

//A draw back to this approach is query duplication.
export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<AllAlbumsQueryResult>({
    query: AllAlbumsDocument,
    variables: {
      first: 12,
      after: null,
    },
  })

  return {
    props: {
      data,
    },
  }
}
