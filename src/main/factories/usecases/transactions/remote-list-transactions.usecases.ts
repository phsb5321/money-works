import { RemoteListTransactionsUseCase } from '@/data/usecases';
import { ListTransactionsUsecases } from '@/domain/usecases';
import { PocketBaseQueryClient } from '@/infra/pocketbase';

export const makeRemoteListTransactionsUseCase = (): ListTransactionsUsecases => {
  const queryClient = new PocketBaseQueryClient('transactions')
  return new RemoteListTransactionsUseCase(queryClient)
}