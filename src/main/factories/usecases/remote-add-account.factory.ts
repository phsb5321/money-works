import { RemoteAddAccount } from '@/data/usecases';
import { AddAccountUsecase } from '@/domain/usecases';
import { PocketBaseAuthClient } from '@/infra/pocketbase';

export const makeRemoteAddAccount = (): AddAccountUsecase => {
  const authClient = new PocketBaseAuthClient()
  return new RemoteAddAccount(authClient)
}
