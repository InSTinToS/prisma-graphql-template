import { IContext } from '../graphql/context'

import { ISchemaLevelResolver } from '@graphql-tools/utils'

type IResolver<
  IRequest = any,
  IResponse = any,
  IParent = any
> = ISchemaLevelResolver<IParent, IContext, IRequest, Promise<IResponse>>

export type { IResolver }
