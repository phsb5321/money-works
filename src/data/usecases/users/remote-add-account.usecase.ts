import { AuthClient } from '@/data/protocols/auth';
import { AddAccountUsecase } from '@/domain/usecases';

export class RemoteAddAccount implements AddAccountUsecase {
  constructor(
    private readonly authClient: AuthClient,
  ) { }

  async add(params: AddAccountUsecase.Params): Promise<AddAccountUsecase.Model> {
    const { email, password, passwordConfirm } = params
    return await this.authClient.signUp({
      email,
      password,
      passwordConfirm
    })
  }
}

export namespace RemoteAddAccount {
  export type Model = AddAccountUsecase.Model
}
