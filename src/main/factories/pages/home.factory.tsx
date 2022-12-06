import { Home } from '@/presentation/pages';
import { makeRemoteListTransactionsUseCase } from '@/main/factories/usecases'
export const makeHome = () => {
  return (
    <Home
      listTransactions={makeRemoteListTransactionsUseCase()}
    />
  );
};