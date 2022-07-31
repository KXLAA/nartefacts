/* istanbul ignore file */

import * as React from 'react'

import { Main } from '@/components/layout'
import { Loader } from '@/components/loader'
import { Spacer } from '@/components/spacer'
import { Table } from '@/components/table'
import {
  AllAlbumsDocument,
  AllAlbumsQueryResult,
  useAllAlbumsQuery,
} from '@/graphql/generated/graphql'
import { createClient } from '@/lib/apollo'
import { useInfiniteScroll } from '@/lib/hooks'

const first = 15 // number of items to load on first load

export default function Admin() {
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
    <Main size="xl" headerType="secondary">
      <Spacer size="8" />

      <div>
        <Table tableData={nodes!} />
      </div>
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
