import typeDefs from '../typeDefs'
import resolvers from '../resolvers'
import { gql, ApolloServer } from 'apollo-server-micro'

const GET_ALBUMS = gql`
  query Albums($first: Int, $after: String) {
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
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`
const testServer = new ApolloServer({
  typeDefs,
  resolvers,
})

it('returns a list of all albums', async () => {
  const result = await testServer.executeOperation({
    query: GET_ALBUMS,
    // variables: { name: 'world' },
  })

  expect(result.errors).toBeUndefined()
  expect(result).toBeDefined()
}, 10000)

it('returns a list of n albums', async () => {
  const n = 3

  const result = await testServer.executeOperation({
    query: GET_ALBUMS,
    variables: { first: n },
  })

  expect(result.errors).toBeUndefined()
  expect(result).toBeDefined()
  expect(result?.data?.allAlbums.edges.length).toBe(n)
}, 10000)
