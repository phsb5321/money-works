import { LocalGetAuthToken } from '@/data/usecases';
import { GetAuthTokenUsecase } from '@/domain/usecases';
import { LocalStorageClient } from '@/infra/cache';

export const makeLocalGetAuthTokenUsecase = (): GetAuthTokenUsecase => {
  const storageClient = new LocalStorageClient()

  return new LocalGetAuthToken(storageClient);
}