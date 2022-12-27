import { AccountModel } from '@/domain/models'

export interface AuthenticationUsecase {
  auth: (params: AuthenticationUsecase.Params) => Promise<AuthenticationUsecase.Model>
}

export namespace AuthenticationUsecase {
  export type Params = {
    email: string
    password: string
  }

  export type Model = any
}
