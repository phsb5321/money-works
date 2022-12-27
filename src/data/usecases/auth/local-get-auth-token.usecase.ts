import { StorageClient } from '@/data/protocols/cache';
import { GetAuthTokenUsecase } from '@/domain/usecases';

export class LocalGetAuthToken implements GetAuthTokenUsecase {
  constructor(
    private readonly storageClient: StorageClient
  ) { }

  async get(): Promise<GetAuthTokenUsecase.Model> {
    return this.storageClient.get('pocketbase_auth');
  }
}