import { Header } from 'components/Header'
import { Card } from 'components/Card'
import * as Layout from 'components/common/Layout'
import { useAllAlbumsQuery } from '../../graphql/generated/graphql'
import { initializeApollo, addApolloState } from '../../lib/apollo'
import { gql } from '@apollo/client'

const QUERY = gql`
  query AllAlbums($first: Int, $after: String) {
    allAlbums(first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          title
          type
          artist {
            id
            name
            photoUrl
            biography
            albums {
              id
              title
              type
              artist {
                name
              }
              albumArt
              likeCount
              description
              spotify
              apple
              colors
            }
          }
          albumArt
          likeCount
          description
          spotify
          apple
          colors
        }
      }
      node {
        id
        title
        type
        artist {
          id
          name
          photoUrl
          biography
          albums {
            id
          }
        }
        albumArt
        likeCount
        description
        spotify
        apple
        colors
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

export default function Home() {
  const { data, loading } = useAllAlbumsQuery()
  const albums = data?.allAlbums?.node
  console.log(data)
  console.log(loading)

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
