import 'reflect-metadata'

import { apolloConfig } from '@config/apolloConfig'

import { ApolloServer } from 'apollo-server'

const main = async () => {
  const server = new ApolloServer(await apolloConfig())

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
}

main().catch(error => console.log(error))
