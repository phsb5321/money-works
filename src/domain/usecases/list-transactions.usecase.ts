import { QueryInterface } from '@/data/protocols/query';
import { TransactionModel } from '@/domain/models/';

export interface ListTransactionsUsecases {
  execute: (params: ListTransactionsUsecases.Params) => Promise<ListTransactionsUsecases.Model>;
}

export namespace ListTransactionsUsecases {
  export type Params = QueryInterface;
  export type Model = TransactionModel[];
}