import { makeHome } from './../factories/pages/home.factory';
import { createBrowserRouter } from 'react-router-dom';

import { makeSignUp, makeLogIn } from '@/main/factories/pages';

export const router = createBrowserRouter([
  { path: "/sign-up", element: makeSignUp() },
  { path: "/log-in", element: makeLogIn() },
  { path: "/", element: makeHome() },
]);

