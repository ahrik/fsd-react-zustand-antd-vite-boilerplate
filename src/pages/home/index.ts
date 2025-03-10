import { lazy } from 'react';

export const HomePageLazy = lazy(() => import('./ui/Home.page').then(({ HomePage }) => ({ default: HomePage })));
