import { TransactionModel } from '@/domain/models/';

export interface ListTransactionsUsecases {
  list: (params: ListTransactionsUsecases.Params) => Promise<ListTransactionsUsecases.Model>;
}

export namespace ListTransactionsUsecases {
  export type Params = {};
  export type Model = TransactionModel[];
}