import { AccountModel } from '@/domain/models';

export interface AddAccountUsecase {
  add(params: AddAccountUsecase.Params): Promise<AddAccountUsecase.Model>
}

export namespace AddAccountUsecase {
  export type Params = {
    email: string
    password: string
  }

  export type Model = any
}
