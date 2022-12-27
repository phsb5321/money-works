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
    const hasToken = Object.keys(authResponse).includes('token')
    if (hasToken) {
      const token = authResponse['token' as keyof typeof authResponse]
      await this.storageClient.set({
        key: 'accessToken',
        value: token
      })
      return { accessToken: token }
    }


  }
}

export namespace RemoteAuthentication {
  export type Model = AuthenticationUsecase.Model
}
