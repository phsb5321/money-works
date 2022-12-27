import { RemoteAuthentication } from "@/data/usecases";
import { AuthenticationUsecase } from "@/domain/usecases";
import { LocalStorageClient } from "@/infra/cache";
import { PocketBaseAuthClient } from "@/infra/pocketbase";

export const makeRemoteAuthentication = (): AuthenticationUsecase => {
  const authClient = new PocketBaseAuthClient()
  const storageClient = new LocalStorageClient()

  return new RemoteAuthentication(
    authClient,
    storageClient
  );
}