import { ApolloServer } from 'apollo-server-micro'

import { AllAlbumsDocument } from '@/graphql/generated/graphql'
import resolvers from '@/graphql/resolvers'
import typeDefs from '@/graphql/typeDefs'

const testServer = new ApolloServer({
  typeDefs,
  resolvers,
})

it('returns a list of all albums', async () => {
  const result = await testServer.executeOperation({
    query: AllAlbumsDocument,
    // variables: { name: 'world' },
  })

  expect(result.errors).toBeUndefined()
  expect(result).toBeDefined()
}, 10000)

it('returns a list of n albums', async () => {
  const n = 3

  const result = await testServer.executeOperation({
    query: AllAlbumsDocument,
    variables: { first: n },
  })

  expect(result.errors).toBeUndefined()
  expect(result).toBeDefined()
  expect(result?.data?.allAlbums.edges.length).toBe(n)
}, 10000)
