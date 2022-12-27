import {
  QueryResponse,
  RepositoryClient,
  RepositoryCreateInterface,
  RepositoryGetInterface
} from '@/data/protocols/query';

import {
  camelToSnakeRecursive,
  snakeToCamelRecursive
} from '@/infra/pocketbase/utils';

import PocketBase, {
  ListResult,
  Record
} from 'pocketbase';


export class PocketBaseQueryClient implements RepositoryClient<Record> {
  private readonly pocketBase: PocketBase

  constructor(
    private readonly collection: string,
  ) {
    this.pocketBase = new PocketBase(
      import.meta.env.VITE_BASE_URL,
    )
  }

  async get({ query }: RepositoryGetInterface): Promise<QueryResponse> {
    const response: ListResult<Record> = await this.pocketBase
      .collection(this.collection)
      .getList()

    const processedResponse = snakeToCamelRecursive(response)
    return { statusCode: 200, body: processedResponse }
  }

  async create({ data }: RepositoryCreateInterface): Promise<QueryResponse> {
    const processedData = camelToSnakeRecursive(data)
    const response: Record = await this.pocketBase
      .collection(this.collection)
      .create(processedData)

    const processedResponse = snakeToCamelRecursive(response)
    return { statusCode: 200, body: processedResponse }
  }
}