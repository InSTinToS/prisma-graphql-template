import { BooksResolver } from '@modules/Books/resolvers/BooksResolver'

import { PrismaClient } from '@prisma/client'
import path from 'path'
import { buildSchema } from 'type-graphql'

interface IGQLContext {
  prisma: PrismaClient
}

const apolloConfig = async () => {
  const schema = await buildSchema({
    validate: false,
    resolvers: [BooksResolver],
    emitSchemaFile: path.resolve(
      __dirname,
      './graphql/generated-schema.graphql'
    )
  })

  const context = {}

  return { schema, context }
}

const prisma = new PrismaClient()

export type { IGQLContext }
export { apolloConfig, prisma }
