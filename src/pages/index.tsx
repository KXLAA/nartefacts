/* istanbul ignore file */

import { useRef } from 'react'

import { Card } from '@/components/card'
import { Grid } from '@/components/grid'
import { Header } from '@/components/header'
import { Main } from '@/components/layout'
import { Spacer } from '@/components/spacer'
import {
  AllAlbumsDocument,
  AllAlbumsQueryResult,
  useAllAlbumsQuery,
} from '@/graphql/generated/graphql'
import { createClient } from '@/lib/apollo'
import { useInfiniteScroll } from '@/lib/hooks'

const first = 9
export default function Home() {
  const { data, loading, fetchMore } = useAllAlbumsQuery({
    variables: { first },
    notifyOnNetworkStatusChange: true,
  })
  const nodes = data?.allAlbums?.edges.map((edge) => edge.node)
  const pageInfo = data?.allAlbums?.pageInfo
  const intersectionRef = useRef(null)

  useInfiniteScroll(intersectionRef, () => {
    if (pageInfo?.endCursor && pageInfo?.hasNextPage) {
      fetchMore({
        variables: {
          first,
          after: pageInfo?.endCursor,
        },
      })
    }
  })

  return (
    <Main>
      <Header primary />
      <Spacer size="8" />
      <Grid columns={3} gap={5}>
        {nodes?.map((album) => (
          <Card key={album?.id} {...album} />
        ))}
      </Grid>
      {loading && <div style={{ textAlign: 'center' }}>Loading...</div>}
      <div style={{ height: '1rem' }} ref={intersectionRef}></div>
    </Main>
  )
}

//A draw back to this approach is query duplication.
export async function getServerSideProps() {
  const apollo = createClient()
  await apollo.query<AllAlbumsQueryResult>({
    query: AllAlbumsDocument,
    variables: { first },
  })

  return {
    props: {
      initialApolloState: apollo.cache.extract(),
    },
  }
}
