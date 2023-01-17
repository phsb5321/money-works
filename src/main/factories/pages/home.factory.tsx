import { HomePage } from '@/presentation/pages';
import { makeRemoteListTransactionsUseCase } from '@/main/factories/usecases'
export const makeHome = () => {
  return (
    <HomePage
      listTransactions={makeRemoteListTransactionsUseCase()}
    />
  );
};