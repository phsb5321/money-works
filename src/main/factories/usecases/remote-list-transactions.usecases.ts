import { RemoteListTransactionsUseCase } from '@/data/usecases';
import { ListTransactionsUsecases } from '@/domain/usecases';
import { SupabaseQueryClient } from '@/infra/supabase';

export const makeRemoteListTransactionsUseCase = (): ListTransactionsUsecases => {
  const queryClient = new SupabaseQueryClient()
  return new RemoteListTransactionsUseCase(queryClient)
}