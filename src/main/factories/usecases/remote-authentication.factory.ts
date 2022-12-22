import { RemoteAuthentication } from "@/data/usecases/remote-authentication.usecase";
import { AuthenticationUsecase } from "@/domain/usecases";
import { PocketBaseAuthClient } from "@/infra/pocketbase";
import { LocalStorageClient } from "@/infra/cache";

export const makeRemoteAuthentication = (): AuthenticationUsecase => {
  const authClient = new PocketBaseAuthClient()
  const storageClient = new LocalStorageClient()

  return new RemoteAuthentication(
    authClient,
    storageClient
  );
}