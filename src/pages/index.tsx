import { Header } from 'components/Header'
import { Card } from 'components/Card'
import * as Layout from 'components/common/Layout'
import {
  AllAlbumsQueryResult,
  AllAlbumsDocument,
} from '../../graphql/generated/graphql'
import { initializeApollo } from '../../lib/apollo'

export default function Home({ data }: AllAlbumsQueryResult) {
  const albums = data?.allAlbums?.node

  return (
    <Layout.Main>
      <Header />

      <Layout.Cards>
        {albums?.map((album) => (
          <Card
            key={album?.id}
            colors={album?.colors}
            likeCount={album?.likeCount}
            albumArt={album?.albumArt}
            spotify={album?.spotify}
            apple={album?.apple}
            type={album?.type}
            description={album?.description}
            title={album?.title}
            artist={album?.artist}
          />
        ))}
      </Layout.Cards>
    </Layout.Main>
  )
}

//A draw back to this approach is query duplication.
export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<AllAlbumsQueryResult>({
    query: AllAlbumsDocument,
    variables: {
      first: 10,
      after: null,
    },
  })

  return {
    props: {
      data,
    },
  }
}
