import { makeLocalGetAuthTokenUsecase, makeRemoteAddAccount } from '@/main/factories/usecases';
import { SignUp } from '@/presentation/pages';

export const makeSignUp = () => {
  return (
    <SignUp
      getAuthToken={makeLocalGetAuthTokenUsecase()}
      addAccount={makeRemoteAddAccount()}
    />
  )
}
