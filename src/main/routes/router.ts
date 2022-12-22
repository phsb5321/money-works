import { createBrowserRouter } from 'react-router-dom';
import { makeHome } from './../factories/pages/home.factory';

import { makeSignIn, makeSignUp } from '@/main/factories/pages';
import { makeLocalGetAuthTokenUsecase } from '../factories/usecases';

const userHasToken = await makeLocalGetAuthTokenUsecase().get();

export const router = createBrowserRouter([
  ...(!userHasToken ? [{ path: "/signup", element: makeSignUp() }] : []),
  ...(!userHasToken ? [{ path: "/signin", element: makeSignIn() }] : []),
  { path: "/", element: makeHome() },
]);

