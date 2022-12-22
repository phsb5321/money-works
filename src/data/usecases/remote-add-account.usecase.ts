import { AuthClient } from '@/data/protocols/auth';
import { AddAccountUsecase } from '@/domain/usecases';

export class RemoteAddAccount implements AddAccountUsecase {
  constructor(
    private readonly authClient: AuthClient,
  ) { }

  async add(params: AddAccountUsecase.Params): Promise<AddAccountUsecase.Model> {
    const { email, password, passwordConfirm } = params
    const authResponse = await this.authClient.signUp({
      email,
      password,
      passwordConfirm
    })

    // TODO: Handle errors from PocketBase
    if (authResponse.error) {
      throw new Error(authResponse.error)
    }
  }
}

export namespace RemoteAddAccount {
  export type Model = AddAccountUsecase.Model
}
