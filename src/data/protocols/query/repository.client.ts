
export interface RepositoryClient<R = any> {
  get: (
    query: RepositoryGetInterface,
  ) => Promise<QueryResponse<R>>

  create: (
    query: RepositoryCreateInterface,
  ) => Promise<QueryResponse<R>>
}

export type RepositoryGetInterface = {
  query?: {
    [key: string]: any
  }
}

export type RepositoryCreateInterface = {
  data: {
    [key: string]: any
  }
}


export type RepositoryMethod = 'select' | 'insert' | 'update' | 'delete'

export enum QueryStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export type QueryResponse<T = any> = {
  statusCode: QueryStatusCode
  body?: T | T[]
}
