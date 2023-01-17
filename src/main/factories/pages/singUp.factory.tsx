import { makeLocalGetAuthTokenUsecase, makeRemoteAddAccount } from '@/main/factories/usecases';
import { SignUpPage } from '@/presentation/pages';

export const makeSignUp: () => JSX.Element = () => {
  return (
    <SignUpPage
      getAuthToken={makeLocalGetAuthTokenUsecase()}
      addAccount={makeRemoteAddAccount()}
    />
  )
}
