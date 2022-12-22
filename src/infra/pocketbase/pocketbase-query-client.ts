import { QueryClient, QueryInterface, QueryResponse } from '@/data/protocols/query';
import PocketBase, { ListResult, Record } from 'pocketbase';

export class PocketBaseQueryClient implements QueryClient {
  private readonly pocketBase: PocketBase

  constructor() {
    this.pocketBase = new PocketBase(
      import.meta.env.VITE_BASE_URL,
    )
  }

  async listPaginated({ collection }: QueryInterface): Promise<QueryResponse> {
    const response: ListResult<Record> = await this.pocketBase
      .collection(collection)
      .getList()

    return {
      statusCode: 200,
      body: response
    }

  }
}

