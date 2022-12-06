import { StorageClient } from '@/data/protocols/cache';
import { GetAuthTokenUsecase } from '@/domain/usecases/get-auth-token.usecase';

export class LocalGetAuthToken implements GetAuthTokenUsecase {
  constructor(
    private readonly storageClient: StorageClient
  ) { }

  async get(): Promise<GetAuthTokenUsecase.Model> {
    return this.storageClient.get('auth-token');
  }
}