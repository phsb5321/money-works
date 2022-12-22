import { QueryClient } from '@/data/protocols/query'
import { TransactionModel } from '@/domain/models'
import { ListTransactionsUsecases } from '@/domain/usecases'

export class RemoteListTransactionsUseCase implements ListTransactionsUsecases {
  constructor(
    private readonly queryClient: QueryClient<TransactionModel>
  ) { }

  async execute(
    params: ListTransactionsUsecases.Params
  ): Promise<TransactionModel[]> {
    const { body } = await this.queryClient.listPaginated(params)
    if (!body) return []
    return body as TransactionModel[]
  }
}