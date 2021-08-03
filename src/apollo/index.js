import { ApolloServer } from 'apollo-server-express'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import context from './context'

export default async function startApolloServer (serverHttp, app) {
  const server = new ApolloServer({ typeDefs, resolvers, context })
  await server.start()

  server.applyMiddleware({ app })

  await new Promise(resolve =>
    serverHttp.listen({ port: process.env.PORT }, resolve)
  )
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/`)
}
