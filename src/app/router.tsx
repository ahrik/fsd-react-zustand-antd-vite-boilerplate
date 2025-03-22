import { createBrowserRouter } from 'react-router-dom';
import { ForbiddenPage } from '@pages/Forbidden.page';
import { HomePageLazy } from '@pages/home';
import { NotFoundPage } from '@pages/NotFound.page';
import { SignInPageLazy } from '@pages/sign-in';
import { ROUTERS } from '@shared/constants';
import { AppLayout } from './layouts/app-layout';
import { ProtectedLayout } from './layouts/protected-layout';
import { PublicLayout } from './layouts/public-layout';
import { AppLoader } from './loaders/AppLoader';
import { AppProvider } from './providers/AppProvider';

export const router = createBrowserRouter([
  {
    element: (
      <AppLoader>
        <AppProvider>
          <AppLayout />
        </AppProvider>
      </AppLoader>
    ),
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: ROUTERS.ROOT,
            element: <HomePageLazy />,
          },
        ],
      },
      {
        element: <PublicLayout />,
        children: [
          {
            path: ROUTERS.SIGN_IN,
            element: <SignInPageLazy />,
          },
        ],
      },
    ],
  },
  { path: ROUTERS.FORBIDDEN, element: <ForbiddenPage /> },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
