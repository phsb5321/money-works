import { AuthClient } from '@/data/protocols/auth';
import { StorageClient } from '@/data/protocols/cache';
import { AuthenticationUsecase } from '@/domain/usecases';

export class RemoteAuthentication implements AuthenticationUsecase {
  constructor(
    private readonly authClient: AuthClient,
    private readonly storageClient: StorageClient
  ) { }

  async auth(params: AuthenticationUsecase.Params): Promise<AuthenticationUsecase.Model> {
    const authResponse = await this.authClient.signIn(params)

    if (authResponse) {
      await this.storageClient.set({
        key: 'accessToken',
        value: authResponse.accessToken
      })
    }

    return {
      accessToken: authResponse.accessToken,
    }
  }
}

export namespace RemoteAuthentication {
  export type Model = AuthenticationUsecase.Model
}
