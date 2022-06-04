/* istanbul ignore file */

import { Card } from '@/components/card'
import { Grid } from '@/components/grid'
import { Header } from '@/components/header'
import { Main } from '@/components/layout'
import { Spacer } from '@/components/spacer'
import {
  AllAlbumsDocument,
  AllAlbumsQueryResult,
} from '@/graphql/generated/graphql'
import { initializeApollo } from '@/lib/apollo'

export default function Home({ data }: AllAlbumsQueryResult) {
  const albums = data?.allAlbums?.node

  return (
    <Main>
      <Header primary />
      <Spacer size="8" />

      <Grid columns={3} gap={5}>
        {albums?.map((album) => (
          <Card key={album?.id} {...album} />
        ))}
      </Grid>
    </Main>
  )
}

//A draw back to this approach is query duplication.
export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<AllAlbumsQueryResult>({
    query: AllAlbumsDocument,
    variables: {
      first: 48,
      after: null,
    },
  })

  return {
    props: {
      data,
    },
  }
}
