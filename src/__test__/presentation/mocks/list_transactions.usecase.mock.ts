import { RepositoryGetInterface } from "@/data/protocols/query";
import { ListTransactionsUsecases } from "@/domain/usecases";

export class ListTransactionsMock implements ListTransactionsUsecases {
  execute: (params: RepositoryGetInterface) => Promise<any> = async (params) => {
    return new Promise(resolve => resolve({ data: [] }))
  }
}