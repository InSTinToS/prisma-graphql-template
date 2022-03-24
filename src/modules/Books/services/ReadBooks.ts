import { BooksRepository } from '../repositories/BooksRepository'

import { Books } from 'prisma/generated/type-graphql'

class ReadBooks {
  booksRepository: BooksRepository

  constructor() {
    this.booksRepository = new BooksRepository()
  }

  async execute(name: Books['name']) {
    return name
      ? [await this.booksRepository.findByName(name)]
      : await this.booksRepository.findAll()
  }
}

export { ReadBooks }
