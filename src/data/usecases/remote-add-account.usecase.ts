import { AuthClient } from '@/data/protocols/auth';
import { StorageClient } from '@/data/protocols/cache';
import { AddAccountUsecase } from '@/domain/usecases';

export class RemoteAddAccount implements AddAccountUsecase {
  constructor(
    private readonly authClient: AuthClient,
    private readonly storageClient: StorageClient
  ) { }

  async add(params: AddAccountUsecase.Params): Promise<AddAccountUsecase.Model> {
    const { email, password } = params
    const authResponse = await this.authClient.signUp({ email, password })

    if (authResponse) {

      for (const [key, value] of Object.entries(authResponse)) {
        this.storageClient.set({ key, value })
      }

      return {
        accessToken: authResponse.accessToken,
      }
    }
  }
}

export namespace RemoteAddAccount {
  export type Model = AddAccountUsecase.Model
}
