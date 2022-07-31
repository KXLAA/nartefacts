/* istanbul ignore file */

import * as React from 'react'

import { Card } from '@/components/card'
import { Grid } from '@/components/grid'
import { Main } from '@/components/layout'
import { Loader } from '@/components/loader'
import { Spacer } from '@/components/spacer'
import {
  AllAlbumsDocument,
  AllAlbumsQueryResult,
  useAllAlbumsQuery,
} from '@/graphql/generated/graphql'
import { createClient } from '@/lib/apollo'
import { useAutoAnimate, useInfiniteScroll } from '@/lib/hooks'

const first = 9 // number of items to load on first load

export default function Home() {
  const [parent] = useAutoAnimate()
  const { data, loading, fetchMore } = useAllAlbumsQuery({
    variables: { first },
    notifyOnNetworkStatusChange: true,
  })

  //infinite scroll stuff
  const nodes = data?.allAlbums?.edges.map((edge) => edge.node)
  const pageInfo = data?.allAlbums?.pageInfo
  const intersectionRef = React.useRef(null)
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
    <Main headerType="primary">
      <Spacer size="8" />
      <Grid
        ref={parent as React.RefObject<HTMLDivElement>}
        columns={{
          '@initial': 1,
          '@sm': 2,
          '@md': 3,
        }}
        gap={5}
      >
        {nodes?.map((album) => (
          <Card key={album?.id} {...album} />
        ))}
      </Grid>
      <Spacer size="4" />

      {loading && <Loader />}

      {/* when this div is visible, fetch more data */}
      <div
        style={{ height: '2rem' }}
        ref={intersectionRef}
        aria-hidden="true"
      />
    </Main>
  )
}

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
