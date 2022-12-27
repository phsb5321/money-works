import { RepositoryClient } from '@/data/protocols/query'
import { TransactionModel } from '@/domain/models'
import { ListTransactionsUsecases } from '@/domain/usecases'

export class RemoteListTransactionsUseCase implements ListTransactionsUsecases {
  constructor(
    private readonly queryClient: RepositoryClient<TransactionModel>
  ) { }

  async execute(params: ListTransactionsUsecases.Params): Promise<ListTransactionsUsecases.Model> {
    const transactions = await this.queryClient.get(params)
    return transactions
  }
}