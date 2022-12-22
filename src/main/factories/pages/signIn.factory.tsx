import { makeLocalGetAuthTokenUsecase, makeRemoteAuthentication } from '@/main/factories/usecases';
import { SignIn } from '@/presentation/pages';

export const makeSignIn = () => {
  return (
    <SignIn
      getAuthToken={makeLocalGetAuthTokenUsecase()}
      authentication={makeRemoteAuthentication()}
    />
  )
}