import { RemoteAddAccount } from '@/data/usecases';
import { AddAccountUsecase } from '@/domain/usecases';
import { SupabaseAuthClient } from '@/infra/supabase';
import { LocalStorageClient } from '@/infra/cache';

export const makeRemoteAddAccount = (): AddAccountUsecase => {
  const authClient = new SupabaseAuthClient()
  const storageClient = new LocalStorageClient()

  return new RemoteAddAccount(
    authClient,
    storageClient
  )
}
