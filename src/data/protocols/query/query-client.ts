
export interface QueryClient<R = any> {
  listPaginated: (
    query: QueryInterface,
  ) => Promise<QueryResponse<R>>
}

export type QueryInterface = {
  collection: string
}

export type QueryMethod = 'select' | 'insert' | 'update' | 'delete'

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
