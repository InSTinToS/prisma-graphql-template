import { ReadBooks } from '../services/ReadBooks'

import { Books } from 'prisma/generated/type-graphql'
import { Args, ArgsType, Field, Query, Resolver } from 'type-graphql'

@ArgsType()
class IQueryBooksArgs {
  @Field(_type => String, { defaultValue: '' })
  name?: string
}

@Resolver()
class BooksResolver {
  @Query(_of => [Books], { nullable: true })
  async books(@Args() { name }: IQueryBooksArgs) {
    const readBooks = new ReadBooks()
    return await readBooks.execute(name)
  }
}

export { BooksResolver }
