import { makeLocalGetAuthTokenUsecase, makeRemoteAuthentication } from '@/main/factories/usecases';
import { LogIn } from '@/presentation/pages';

export const makeLogIn = () => {
  return (
    <LogIn
      getAuthToken={makeLocalGetAuthTokenUsecase()}
      authentication={makeRemoteAuthentication()}
    />
  )
}