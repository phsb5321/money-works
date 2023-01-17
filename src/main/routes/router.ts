import { createBrowserRouter } from 'react-router-dom';

import { makeHome, makeSignIn, makeSignUp } from '@/main/factories/pages';
import { makeLocalGetAuthTokenUsecase } from '@/main/factories/usecases';

const userHasToken = await makeLocalGetAuthTokenUsecase().get();

export const router = createBrowserRouter([
  ...(!userHasToken ? [{ path: "/signup", element: makeSignUp() }] : []),
  ...(!userHasToken ? [{ path: "/signin", element: makeSignIn() }] : []),
  { path: "/", element: makeHome() },
]);

