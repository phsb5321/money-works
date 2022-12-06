import { RemoteAuthentication } from "@/data/usecases/remote-authentication.usecase";
import { AuthenticationUsecase } from "@/domain/usecases";
import { SupabaseAuthClient } from "@/infra/supabase";
import { LocalStorageClient } from "@/infra/cache";

export const makeRemoteAuthentication = (): AuthenticationUsecase => {
  const authClient = new SupabaseAuthClient()
  const storageClient = new LocalStorageClient()

  return new RemoteAuthentication(
    authClient,
    storageClient
  );
}