import { prisma } from '@config/apolloConfig'

class BooksRepository {
  findAll = async () => await prisma.books.findMany()

  findByName = async (name: string) =>
    await prisma.books.findUnique({ where: { name } })
}

export { BooksRepository }
