import { lazy } from 'react';

export const SignInPageLazy = lazy(() =>
  import('./ui/SignIn.page').then(({ SignInPage }) => ({ default: SignInPage }))
);
