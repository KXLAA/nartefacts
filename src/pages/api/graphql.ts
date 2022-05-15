import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import typeDefs from 'graphql/typeDefs'
import resolvers from 'graphql/resolvers'

const cors = Cors()

const apolloServer = new ApolloServer({ typeDefs, resolvers })
const startServer = apolloServer.start()

export default cors(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer
  console.log(`connected to server ⚡️`)
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}
