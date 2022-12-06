import { QueryClient } from '@/data/protocols/query'
import { TransactionModel } from '@/domain/models'
import { ListTransactionsUsecases } from '@/domain/usecases'

export class RemoteListTransactionsUseCase implements ListTransactionsUsecases {
  constructor(
    private readonly queryClient: QueryClient<TransactionModel>
  ) { }

  async list(
    params: ListTransactionsUsecases.Params
  ): Promise<TransactionModel[]> {
    const { body } = await this.queryClient.request()
    return body as TransactionModel[]
  }
}